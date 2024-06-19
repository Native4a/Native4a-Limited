import { Route } from 'react-router-dom'

const backlinkFloorNav = () => (
  <div>
    {/* 只有在非/settings路徑時才渲染導航欄 */}
    <Route
      path="/"
      render={() => window.location.pathname == '/backlinks' && <Navbar />}
    />
    {/* 其他路由... */}
  </div>
)
export default backlinkFloorNav
