import React, { useContext, useEffect, useState } from "react";
import { Col, Input, Modal, Row } from "antd";
import type { ColumnsType } from "antd/lib/table";
import { IUserDto } from "../../services/users/dtos/user";
import { ICreateUserDto } from "../../services/users/dtos/create-user";
import { CrudContext } from "../crud/crud-context/context-dto";
export interface ICrudTableProps {
  dataSource: IUserDto[];
  columns: ColumnsType<IUserDto>;
}

const CreateUpdateModal = (fetchUrl: string) => {
  const { crudContext, setCrudContext } = useContext(CrudContext);
  const [userData, setUserData] = useState<ICreateUserDto>(
    {} as ICreateUserDto
  );
  
  return (
    <React.Fragment>
      <Modal
        title={!crudContext.isUpdateVisible ? "Create User" : "Update User"}
      >
        <Row>
          <Col sm={24} md={12}>
            <Input />
          </Col>
          <Col sm={24} md={12}>
            <Input />
          </Col>
        </Row>
      </Modal>
    </React.Fragment>
  );
};
export default CreateUpdateModal;
