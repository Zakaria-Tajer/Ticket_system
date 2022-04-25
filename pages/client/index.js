import { Card } from '@/components/client/Card'
import { ContactHelp } from '@/components/client/ContactHelp'
import { Search } from '@/components/client/Search/Search'
import { Navbar } from '@/components/Layout/Navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex h-96 items-center justify-center bg-[#13274F]">
        <Search />
      </div>
      <Card />
      <ContactHelp />
    </>
  )
}

export default Home
