import React, { useState } from 'react';
import Chart1 from '../../components/charts/monthlyTrns';
import WrldMap from '../../components/charts/wrldmap';
import RegUsers from '../../components/charts/regusers';
import GeoChart from '../../components/charts/GeoChart';
import data from '../../components/charts/Geochart.world.json';
import data1 from '../../components/charts/data.csv';
// import NestedPi from '../../components/charts/nestedpi';
import SbChart from '../../components/charts/UserRegs';
import * as d3 from 'd3';
//import Demo from '../../components/charts/chart2';

const LandingPage = () => {
  const [count] = useState(d3.csv(data1));
  return (
    <div>
      <h2 class="ex1">Enterprise Profile Key Performance Indicators</h2>
      <div className="container-fluid">
        {/* <!-- kpi section --> */}
        <div className="row">
          <div className="col-lg-3 col-sm-2">
            <div className="card">
              <div className="card-heading">
                <h5 class="ex2">GET requests</h5>
              </div>
              <div classname="card-value">
                <span>
                  <h6 class="ex2">3,272,252</h6>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-2">
            <div className="card">
              <div className="card-heading">
                <h5 class="ex2">POST requests</h5>
              </div>
              <div classname="card-value">
                <span>
                  <h6 class="ex2">123,058</h6>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-2">
            <div className="card">
              <div className="card-heading">
                <h5 class="ex2">PATCH requests</h5>
              </div>
              <div classname="card-value">
                <span>
                  <h6 class="ex2">116,904</h6>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-2">
            <div className="card" padding="20px">
              <div className="card-heading">
                <h5 class="ex2">DELETE requests</h5>
              </div>
              <div classname="card-value">
                <span>
                  <h6 class="ex2">2,115</h6>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row top-buffer">
          <div className="col-lg-12 col-sm-6">
            <div className="card">
              <div className="card-heading">
                <div>
                  <h5 class="ex2">Monthly API Transactions</h5>
                </div>
              </div>
              <div className="card-value">
                <span>
                  <Chart1 />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row top-buffer">
          <div class="col d-flex justify-content-center">
            <div className="col-lg-12 col-sm-6">
              <div className="card">
                <div className="card-heading">
                  <div>
                    <h5 class="ex2">Registrations Worldwide</h5>
                  </div>
                </div>
                <div className="card-value">
                  <span>
                    <GeoChart data={data} count={count} />
                    {/* <WrldMap /> */}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row top-buffer">
          <div className="col-lg-6 col-sm-2">
            <div className="card">
              <div className="card-heading">
                <h5 class="ex2">User Registrations</h5>
              </div>
              <div classname="card-value">
                <span>
                  <SbChart />
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-2">
            <div className="card">
              <div className="card-heading">
                <h5 class="ex2">Total IBMid Registered Users</h5>
              </div>
              <div classname="card-value">
                <span>
                  <RegUsers />
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- kpi + mini charts section --> */}

        {/* <!-- charts section --> */}
      </div>
      {/* <p class="ex1">
        <Chart1 />
      </p> */}

      {/* <Demo /> */}
    </div>
  );
};

export default LandingPage;
