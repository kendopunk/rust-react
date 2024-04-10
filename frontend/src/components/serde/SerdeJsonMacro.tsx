/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * src/components/serde/SerdeJsonMacro.tsx
 * Using the json!() macro
 */
import { useEffect, useState } from 'react'
import { DataGrid, GridCellParams, GridColDef } from '@mui/x-data-grid'
import { Box, Typography } from '@mui/material'

import StandardLoader from '../common/StandardLoader'
import asyncWrapper from '../../lib/async/asyncWrapper'
import genericGetPromise from '../../lib/async/genericGetPromise'

export default function SerdeJsonMacro(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(true)
  const [gridData, setGridData] = useState<any>([])

  const URL = `${process.env.REACT_APP_ACTIX_SERVER}/serde_json_macro`

  const columns: GridColDef[] = [
    {
      field: 'artist',
      headerName: 'Artist',
      flex: 1
    },
    {
      field: 'title',
      headerName: 'Album Title',
      flex: 1
    },
    {
      field: 'release_date',
      headerName: 'Released',
      flex: 1
    },
    {
      field: 'sold',
      headerName: 'Sold',
      flex: 1,
      renderCell: (params: GridCellParams) => {
        const {
          row: { sold }
        } = params
        return (sold ?? 0).toLocaleString('en-US')
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
        (data?.data?.albums ?? []).map((m: any, index: number) => {
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
        <Typography variant="body2">
          Using the json!() macro to create and return JSON-formatted data for some of the best
          selling albums of all time
        </Typography>
      </Box>
      <Box sx={{ mt: 1, mb: 1 }}>
        <Typography variant="body2">
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
