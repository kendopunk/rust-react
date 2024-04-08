/**
 * src/pages/Home.tsx
 */
import SplitPage from '../components/common/SplitPage'
import HomeLeft from '../components/home/HomeLeft'
import HomeRight from '../components/home/HomeRight'
import Layout from '../Layout'

export default function Home(): JSX.Element {
  return (
    <Layout>
      <SplitPage leftCmp={<HomeLeft />} rightCmp={<HomeRight />} />
    </Layout>
  )
}
