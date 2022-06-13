import React from "react";
import { Table } from "antd";
import { ICrudTableProps } from "./create-update-modal";

const CrudTable = ({ dataSource, columns }: ICrudTableProps) => {
  return (
    <React.Fragment>
      <Table dataSource={dataSource} columns={columns} />
    </React.Fragment>
  );
};
export default CrudTable;
