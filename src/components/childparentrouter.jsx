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
import DayLayout from "./daylayout"




export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<IndexPage />} />
      <Route path="/" element={<Layout />}>
        <Route
          path="/registration"
          element={<RegistrationPage />}
          loader={loginloader}
          action={loadingAction}
        />

        <Route path="/fitment" element={<SurveyLayout />} loader={survyLoader}>
          <Route
            path="/fitment"
            element={<DayLayout />}
            loader={async ({ request }) => {
              return await requireAuth(request);
            }}
          >

            <Route
              path="/fitment/edit"
              element={<EditEvent />}
              loader={async ({ request }) => {
                return await requireAuth(request);
              }}
            />
          </Route>
        </Route>
        <Route path="/retail" element={<SurveyLayout />} loader={survyLoader}>
          <Route
            path="/retail"
            element={<RidesLayout />}
            loader={async ({ request }) => {
              return await requireAuth(request);
            }}
          >
            <Route
              path="/retail/edit"
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