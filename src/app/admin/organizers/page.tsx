'use client';

import { Organizer } from '@/models/organizers';
import { useEffect, useState } from 'react';

import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  getKeyValue,
} from '@heroui/table';
import { getOrganizers } from '@/services/organizers';

const columns = [
  {
    key: 'id',
    label: 'ID',
  },
  {
    key: 'name',
    label: 'NAME',
  },
];

export default function OrganizersPage() {
  const [organizers, setOrganizers] = useState<Organizer[] | null>(null);
  useEffect(() => {
    getOrganizers().then((organizers) => {
      setOrganizers(organizers);
    });
  }, []);

  if (!organizers) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Organizers</h1>
      <Table aria-label="Table with all organizers">
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody items={organizers} emptyContent={'No rows to display.'}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
}
