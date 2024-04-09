/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * src/components/polars/PolarsAggCount.tsx
 * founded, count(founded)
 */
import { useEffect, useState } from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { Box, Typography } from '@mui/material'

import StandardLoader from '../common/StandardLoader'
import asyncWrapper from '../../lib/async/asyncWrapper'
import genericGetPromise from '../../lib/async/genericGetPromise'

export default function PolarsAggCount(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(true)
  const [gridData, setGridData] = useState<any>([])
  const URL = `${process.env.REACT_APP_ACTIX_SERVER}/polars_agg_count`

  const columns: GridColDef[] = [
    {
      field: 'founded',
      headerName: 'Year Founded',
      flex: 1
    },
    {
      field: 'countFounded',
      headerName: 'count(Year Founded)',
      flex: 1
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
          Aggregation by year of founding, sorted by count descending
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
