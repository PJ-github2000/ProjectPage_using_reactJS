/* eslint-disable no-undef */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-unused-vars */
import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const clickTabItem = () => {
    updateTabId(tabId)
  }
  const selectedTab = isActive ? `active-tab-btn` : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${selectedTab}`}
        onClick={clickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
