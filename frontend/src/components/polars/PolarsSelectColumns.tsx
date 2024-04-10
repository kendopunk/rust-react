/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * src/components/polars/PolarsSelectColumns.tsx
 * Specific columns from organizations-100.csv
 */
import { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Box, Typography } from '@mui/material'

import StandardLoader from '../common/StandardLoader'
import asyncWrapper from '../../lib/async/asyncWrapper'
import genericGetPromise from '../../lib/async/genericGetPromise'
import { defaultColumnConfig } from './polarsColumnConfig'

export default function PolarsSelectColumns(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(true)
  const [gridData, setGridData] = useState<any>([])
  const URL = `${process.env.REACT_APP_ACTIX_SERVER}/polars_select_columns`

  const columns = defaultColumnConfig.filter((f) => {
    return ['organizationId', 'name', 'industry', 'numEmployees'].indexOf(f.field) >= 0
  })

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
        <Typography variant="body2">Using Polars to select specific columns</Typography>
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
