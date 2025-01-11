/* eslint-disable react-refresh/only-export-components */
// import {Suspense} from 'react'
// import { getUserData } from "./api";
import UserDetails from "./userdetails";

import DaySummaryForm from "./daysummaryform";

const DaySummaryPage = ({ revalidator, onEdit, userData }) => {
  return (
    <>
      <div className="container">
        <UserDetails
          userData={userData}
          revalidator={revalidator}
          onEdit={onEdit}
        />
        <DaySummaryForm />
      </div>
    </>
  );
};

export default DaySummaryPage;
