import { useState } from "react";
import { CrudContext, ICrudContext } from "./context-dto";

const CrudContextProvider = ({ children }: any) => {
  const [crudContext, setCrudContext] = useState<ICrudContext>(
    {} as ICrudContext
  );

  return (
    <CrudContext.Provider
      value={{
        crudContext,
        setCrudContext,
      }}
    >
      {children}
    </CrudContext.Provider>
  );
};
export default CrudContextProvider;
