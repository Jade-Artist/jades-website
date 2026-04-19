import { useParams } from 'react-router-dom'
import Gallery from '../components/Gallery'

function TopicPage() {
  const { topic } = useParams()
  return <Gallery topic={topic} />
}

export default TopicPage
