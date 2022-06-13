import React from 'react';

import type { ColumnsType } from "antd/lib/table";
import { IUserDto } from "../../services/users/dtos/user";
export interface ICrudTableProps {
    dataSource: IUserDto[];
    columns: ColumnsType<IUserDto>;
  }
  

const CrudBase =({ dataSource, columns }: ICrudTableProps)=>{

}