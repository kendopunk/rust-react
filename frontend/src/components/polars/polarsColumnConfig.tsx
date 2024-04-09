/**
 * src/components/polars/polarsColumnConfig.tsx
 */
import { GridCellParams, GridColDef } from '@mui/x-data-grid'

export const defaultColumnConfig: GridColDef[] = [
  {
    field: 'index',
    headerName: 'Index',
    flex: 0.5
  },
  {
    field: 'organizationId',
    headerName: 'Org Id',
    flex: 1
  },
  {
    field: 'name',
    headerName: 'Org Name',
    flex: 1
  },
  {
    field: 'website',
    headerName: 'Website',
    flex: 1
  },
  {
    field: 'description',
    headerName: 'Description',
    flex: 1.5
  },
  {
    field: 'founded',
    headerName: 'Founded',
    flex: 0.5
  },
  {
    field: 'industry',
    headerName: 'Industry',
    flex: 1.5,
    renderCell: (params: GridCellParams) => {
      const {
        row: { industry }
      } = params
      return industry ?? '--'
    }
  },
  {
    field: 'numEmployees',
    headerName: '# Employees',
    flex: 1,
    renderCell: (params: GridCellParams) => {
      const {
        row: { numEmployees }
      } = params
      return (numEmployees ?? 0).toLocaleString('en-US')
    }
  }
]
