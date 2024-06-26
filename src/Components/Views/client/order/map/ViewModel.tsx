import React, { useContext, useEffect, useRef, useState } from "react";
import * as Location from "expo-location";
import MapView, { Camera } from "react-native-maps";
import { Order } from "../../../../../Domain/entities/Order";
import { OrderContext } from "../../../../../Presentation/context/OrderContext";
import socket from "../../../../../Presentation/utils/SocketIO";

const ClientOrderMapViewModel = (order: Order) => {
  const [messagePermissions, setMessagePermissions] = useState("");
  const [responseMessage, setResponseMessage] = useState('');
  const [refPoint, setRefPoint] = useState({
    name: "",
    latitude: 0.0,
    longitude: 0.0,
  });
  const [position, setPosition] = useState({
    latitude: 0.0,
    longitude: 0.0
  });
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
    socket.connect();
    socket.on('connect', () => {
      console.log('---- SOCKET IO CONECTADO ----');
    });
    socket.on(`position/${order.id!}`, (data) => {
      setPosition({latitude: data.lat, longitude: data.lng});

    })
    const requestPermissions = async () => {
      const foreground = await Location.requestForegroundPermissionsAsync();

      if (foreground.granted) {
        startForegroundUpdate();
      }
    };
    requestPermissions();
  }, []);

  const startForegroundUpdate = async () => {
    const { granted } = await Location.getForegroundPermissionsAsync();

    if (!granted) {
      setMessagePermissions("Permiso de ubicacion denegado");
      return;
    }

    const location = await Location.getLastKnownPositionAsync();
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
  };

  

  return {
    messagePermissions,
    position,
    mapRef,
    ...refPoint,
    origin,
    destination,
    responseMessage,
    socket
  };
};

export default ClientOrderMapViewModel;
