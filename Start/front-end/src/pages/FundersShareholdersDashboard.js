import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import CustomizedTables from '../Components/Table';
import FundersShareholdersDashboardNavBar from "../Components/FundersShareholdersDashboardNavBar";

const FundersShareholdersDashboard = () => {
  return (
    <>
      <FundersShareholdersDashboardNavBar />
      
      <div id='dashboard-container'>
        <div id='dashboard'>
          <div id='dashboard-nav'>
            <div id='dashboard-nav-left'>
              <h3>Touching Nations</h3>
            </div>
            <div id='dashboard-nav-right'>
              <MenuIcon id='menu-icon' />
              <input type='text' placeholder='Search' />
              <SearchIcon id='search-icon' />
            </div>
            <br/>
            <div className="text-center">
              <h1>{`The number of live cases is: ${5}`}</h1>
              <h1>{`Cases assigned/accepted by social workers is: ${5}`}</h1>
              <h1>{`The number of social workers is: ${4}`}</h1>
            </div>
          </div>
          <CustomizedTables />
        </div>
      </div>
      <br/>
    </>
  );
};

export default FundersShareholdersDashboard;
