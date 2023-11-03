import React from 'react';
import { Pagination as AntPagination } from 'antd';
import styled from 'styled-components';

const StyledPagination = styled(AntPagination)`
  && {
    margin-top: 20px;
    .ant-pagination-item-active {
        background-color: var(--medium-gray);
        border:none;
      }
    .ant-pagination-item-active a {
        color: var(--strong-gray);
    }

    .ant-pagination-item a {
        color: var(--strong-gray);
    }

    .ant-pagination-item a:hover {
        color: var(--blue);
    }
  }
`;

const Pagination = ({ totalItems, itemsPerPage, currentPage, onChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <StyledPagination
      current={currentPage}
      total={totalItems}
      pageSize={itemsPerPage}
      onChange={onChange}
      showSizeChanger={false}
    />
  );
};

export default Pagination;
