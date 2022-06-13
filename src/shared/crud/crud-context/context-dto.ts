import React from "react";

export interface ICrudContext {
  isModalVisible: boolean;
  isUpdateVisible: boolean;
  entityId: number;
}

export const CrudContext = React.createContext({
  crudContext: {} as ICrudContext,
  setCrudContext: (e: ICrudContext) => {},
});
