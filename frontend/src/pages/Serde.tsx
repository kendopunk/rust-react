/**
 * src/pages/Polars.tsx
 */
import SplitPage from '../components/common/SplitPage'
import SerdeLeft from '../components/serde/SerdeLeft'
import SerdeRight from '../components/serde/SerdeRight'
import Layout from '../Layout'

export default function Serde(): JSX.Element {
  return (
    <Layout>
      <SplitPage leftCmp={<SerdeLeft />} rightCmp={<SerdeRight />} />
    </Layout>
  )
}
