import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom"

import RegistrationPage from "./registration"
import IndexPage from "./indexpage"
import Layout from "./layout"
import PageNotFound from "./404"
import SurveyLayout from "./surveylayout"
import {action as loadingAction} from "./registration"
import { loginloader} from "./registration"
import { loader as survyLoader } from "./surveylayout";
import { requireAuth } from "./utilis";
import EditEvent from "./EditEvent";
import RidesLayout from "./rideslayout";
import FleetLayout from "./fleetlayout";
import DayLayout from "./daylayout"
import SummaryLayout from "./summarylayout"
import IndexPageChildOne from "./Indexpage_child_one"
import IndexPageChildTwo from "./Indexpage_child_two"


export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<IndexPage />} />
      <Route path="/" element={<Layout />}>
      <Route path="/express" element={<IndexPageChildOne/>}/>
      <Route path="/on_go" element={<IndexPageChildTwo/>}/>
        <Route
          path="/registration"
          element={<RegistrationPage />}
          loader={loginloader}
          action={loadingAction}
        />

        <Route path="/express/fitment" element={<SurveyLayout />} loader={survyLoader}>
          <Route
            path="/express/fitment"
            element={<DayLayout />}
            loader={async ({ request }) => {
              return await requireAuth(request);
            }}
          >

            <Route
              path="/express/fitment/edit"
              element={<EditEvent />}
              loader={async ({ request }) => {
                return await requireAuth(request);
              }}
            />
          </Route>
        </Route>
        <Route path="/express/retail" element={<SurveyLayout />} loader={survyLoader}>
          <Route
            path="/express/retail"
            element={<RidesLayout />}
            loader={async ({ request }) => {
              return await requireAuth(request);
            }}
          >
            <Route
              path="/express/retail/edit"
              element={<EditEvent />}
              loader={async ({ request }) => {
                return await requireAuth(request);
              }}
            />
          </Route>
        </Route>

        <Route path="/on_go/summary" element={<SummaryLayout/>} loader={survyLoader}>
        <Route
              path="/on_go/summary"
              element={<SummaryLayout />}
              loader={async ({ request }) => {
                return await requireAuth(request);
              }}
            />

            <Route
              path="/on_go/summary/edit"
              element={<EditEvent />}
              loader={async ({ request }) => {
                return await requireAuth(request);
              }}
            />
        </Route>

        <Route path="/on_go/wholesale" element={<SurveyLayout />} loader={survyLoader}>
          <Route
            path="/on_go/wholesale"
            element={<FleetLayout />}
            loader={async ({ request }) => {
              return await requireAuth(request);
            }}
          >
            <Route
              path="/on_go/wholesale/edit"
              element={<EditEvent />}
              loader={async ({ request }) => {
                return await requireAuth(request);
              }}
            />

          </Route>
        </Route>
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);