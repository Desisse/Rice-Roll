import React, { useContext, useEffect, useRef, useState } from "react";
import * as Location from "expo-location";
import MapView, { Camera } from "react-native-maps";
import { Order } from "../../../../../Domain/entities/Order";
import { OrderContext } from "../../../../../Presentation/context/OrderContext";
import socket from '../../../../../Presentation/utils/SocketIO';

const DeliveryOrderMapViewModel = (order: Order) => {
  const [messagePermissions, setMessagePermissions] = useState("");
  const [responseMessage, setResponseMessage] = useState('');
  const [refPoint, setRefPoint] = useState({
    name: "",
    latitude: 0.0,
    longitude: 0.0,
  });
  const [position, setPosition] = useState<Location.LocationObjectCoords>();
  const [origin, setOrigin] = useState({
    latitude: 0.0,
    longitude: 0.0
  });
  const [destination, setDestination] = useState({
    latitude: order.address?.lat!,
    longitude: order.address?.lng!
  })
  const mapRef = useRef<MapView | null>(null);
  let positionSuscription: Location.LocationSubscription;

  const { updateToDelivered } = useContext(OrderContext)

  

  useEffect(() => {

    //Llamdo socket
    socket.connect();
    socket.on('connect', () => {
      console.log('---- SOCKET IO CONECTADO ----');
      
    })

    const requestPermissions = async () => {
      const foreground = await Location.requestForegroundPermissionsAsync();

      if (foreground.granted) {
        startForegroundUpdate();
      }
    };
    requestPermissions();
  }, []);

  const updateToDeliveredOrder = async() => {
    const result = await updateToDelivered(order);
    setResponseMessage(result.message);

  }

  const onRegionChangeComplete = async (
    latitude: number,
    longitude: number
  ) => {
    try {
      const place = await Location.reverseGeocodeAsync({
        latitude: latitude,
        longitude: longitude,
      });

      let city;
      let street;
      let streetNumber;

      place.find((p) => {
        city = p.city;
        street = p.street;
        streetNumber = p.streetNumber;
        setRefPoint({
          name: `${street}, ${streetNumber}, ${city}`,
          latitude: latitude,
          longitude: longitude,
        });
      });
    } catch (error) {
      console.log("ERROR: " + error);
    }
  };

  const startForegroundUpdate = async () => {
    const { granted } = await Location.getForegroundPermissionsAsync();

    if (!granted) {
      setMessagePermissions("Permiso de ubicacion denegado");
      return;
    }

    const location = await Location.getLastKnownPositionAsync();
    setPosition(location?.coords);
    setOrigin({
      latitude: location?.coords.latitude!,
      longitude: location?.coords.longitude!
    })
    const newCamera: Camera = {
      center: {
        latitude: location?.coords.latitude!,
        longitude: location?.coords.longitude!,
      },
      zoom: 15,
      heading: 0,
      pitch: 0,
      altitude: 0,
    };

    mapRef.current?.animateCamera(newCamera, { duration: 2000 });

    positionSuscription?.remove();

    positionSuscription = await Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.Balanced,
      },
      (location) => {
        // console.log('POSICION: ' + JSON.stringify(location.coords, null, 3));
        socket.emit('position', {
          id_order: order.id,
          lat: location.coords.latitude,
          lng: location.coords.longitude
        })
        setPosition(location?.coords);
        const newCamera: Camera = {
          center: {
            latitude: location?.coords.latitude!,
            longitude: location?.coords.longitude!,
          },
          zoom: 15,
          heading: 0,
          pitch: 0,
          altitude: 0,
        };
        mapRef.current?.animateCamera(newCamera, { duration: 2000 });

      }
    );
  };

  const stopForegroundUpdate = () => {
    positionSuscription.remove();
    setPosition(undefined);
  }

  

  return {
    messagePermissions,
    position,
    mapRef,
    ...refPoint,
    origin,
    destination,
    responseMessage,
    socket,
    onRegionChangeComplete,
    stopForegroundUpdate, 
    updateToDeliveredOrder
  };
};

export default DeliveryOrderMapViewModel;
