"use client";

import { OrganizationProfile, useUser } from "@clerk/nextjs";
import Link from "next/link";

const DotIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
    >
      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
    </svg>
  )
}

type Props = {
  birthday: string | undefined,
  cityState: string | undefined,
}

const UserDetailsPage = ({ birthday, cityState }: Props) => {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">User Details</h1>
      <p><span className="font-semibold">Birthday:</span> {birthday}</p>
      <p><span className="font-semibold">City/State:</span> {cityState}</p>
      <Link href="/" className="text-blue-500">Home</Link>
    </div>
  );
};

export default function OrganizationProfilePage() {
  const { user } = useUser();

  return (
    <OrganizationProfile path="/organization-profile" routing="path">
      <OrganizationProfile.Page
        label="User Details"
        labelIcon={<DotIcon />}
        url="user-details"
      >
        <UserDetailsPage birthday={user?.publicMetadata.birthday} cityState={user?.publicMetadata.cityState}/>
      </OrganizationProfile.Page>
    </OrganizationProfile>
  );
}