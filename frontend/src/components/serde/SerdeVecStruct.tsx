/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * src/components/serde/SerdeVecStruct.tsx
 * All data from organizations-100.csv
 */
import { useEffect, useState } from 'react'
import { DataGrid, GridCellParams, GridColDef } from '@mui/x-data-grid'
import { Box, Typography } from '@mui/material'

import StandardLoader from '../common/StandardLoader'
import asyncWrapper from '../../lib/async/asyncWrapper'
import genericGetPromise from '../../lib/async/genericGetPromise'

export default function SerdeVecStruct(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(true)
  const [gridData, setGridData] = useState<any>([])

  const URL = `${process.env.REACT_APP_ACTIX_SERVER}/serde_struct_to_json`

  const columns: GridColDef[] = [
    {
      field: 'order_id',
      headerName: 'Order ID',
      flex: 1
    },
    {
      field: 'last_name',
      headerName: 'Last Name',
      flex: 1
    },
    {
      field: 'first_name',
      headerName: 'First Name'
    },
    {
      field: 'city',
      headerName: 'city',
      flex: 1
    },
    {
      field: 'state',
      headerName: 'State',
      flex: 1
    },
    {
      field: 'shipped',
      headerName: 'Shipped',
      flex: 1,
      renderCell: (params: GridCellParams) => {
        const {
          row: { shipped }
        } = params
        return shipped ? 'Yes' : 'No'
      }
    }
  ]

  /**
   * Add "id" property to each row of data (required for MUI grid)
   */
  function addRowMetadata(data: any) {
    return data.map((m: any, index: number) => {
      return {
        id: index,
        ...m
      }
    })
  }

  async function fetchData() {
    const [, data] = await asyncWrapper(genericGetPromise(URL))
    if (data) {
      setGridData(
        (data?.data ?? []).map((m: any, index: number) => {
          return {
            ...m,
            id: index
          }
        })
      )
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) {
    return <StandardLoader />
  }

  return (
    <Box>
      <Box sx={{ mt: 1, mb: 1 }}>
        <Typography variant="caption">
          Converting a vector of customer order structs into JSON. Data generated by the{' '}
          <a href="https://crates.io/crates/fake" target="_blank" className="hyperlink">
            fake
          </a>{' '}
          crate.
        </Typography>
      </Box>
      <Box sx={{ mt: 1, mb: 1 }}>
        <Typography variant="caption">
          <b>Endpoint: </b>: {URL}
        </Typography>
      </Box>
      <DataGrid
        columns={columns}
        rows={addRowMetadata(gridData)}
        sx={{
          height: '70vh',
          fontSize: '12px'
        }}
      />
    </Box>
  )
}
