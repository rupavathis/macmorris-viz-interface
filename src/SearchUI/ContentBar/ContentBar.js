import Table from 'react-bootstrap/Table';
import {
  Link
} from "react-router-dom";


const columns = [
  { id: 'name', label: 'Name', minWidth: 200 },
  { id: 'dob', label: 'Date of Birth', minWidth: 100 },
  {
    id: 'dod',
    label: 'Date of Death',
    minWidth: 100,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'dof',
    label: 'Date of Flourishing',
    minWidth: 100,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'gender',
    label: 'Gender',
    minWidth: 100,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'roles',
    label: 'Roles',
    minWidth: 180,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function ContentBar({ data }) {
  return (
    <Table striped>
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              key={column.id}
              align={column.align}
              style={{ minWidth: column.minWidth }}
            >
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>

        {data.map((data) => (
          <tr>
            <td>
              <Link to={`/profile/${data.id}`}>
                {data.display_name}
              </Link>
            </td>
            <td>{data.date_of_birth}</td>
            <td>{data.date_of_death}</td>
            <td>{data.date_of_flourishing}</td>
            <td>{data.gender?.name}</td>
            <td>{data.attribs?.reduce((deletedData, name) => deletedData.concat(`${name.name}` + ' , '), '')}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ContentBar;
