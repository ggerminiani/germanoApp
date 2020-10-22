import { v1 as uuidv1 } from 'uuid';

export const getUUID = () => {
  const uuid = uuidv1();
  return uuid;
};
