import { AddressRepositoryImpl } from "../../../Data/repositories/AddressRepository";

const { getByUser } = new AddressRepositoryImpl();


export const GetByUserAddressUseCase = async (id_user: string) => {
  return await getByUser(id_user);
}
