/**
 * src/pages/Polars.tsx
 */
import SplitPage from '../components/common/SplitPage'
import PolarsLeft from '../components/polars/PolarsLeft'
import PolarsRight from '../components/polars/PolarsRight'
import Layout from '../Layout'

export default function Polars(): JSX.Element {
  return (
    <Layout>
      <SplitPage leftCmp={<PolarsLeft />} rightCmp={<PolarsRight />} />
    </Layout>
  )
}
