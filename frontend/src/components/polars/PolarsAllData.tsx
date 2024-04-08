/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * src/components/polars/PolarsAllData.tsx
 * All data from organizations-100.csv
 */
import { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'

import StandardLoader from '../common/StandardLoader'
import asyncWrapper from '../../lib/async/asyncWrapper'
import genericGetPromise from '../../lib/async/genericGetPromise'
import { defaultColumnConfig } from './polarsColumnConfig'

export default function PolarsAllData(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(true)
  const [gridData, setGridData] = useState<any>([])

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
    const [, data] = await asyncWrapper(
      genericGetPromise(`${process.env.REACT_APP_ACTIX_SERVER}/polars_all_data`)
    )
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
    <DataGrid
      columns={defaultColumnConfig}
      rows={addRowMetadata(gridData)}
      sx={{
        height: '70vh',
        fontSize: '12px'
      }}
    />
  )
}
