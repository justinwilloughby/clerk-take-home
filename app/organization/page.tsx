import { OrganizationList } from "@clerk/nextjs";

export default function OrganizationListPage() {
    return (
        <OrganizationList
            hidePersonal={true}
            afterCreateOrganizationUrl='/organization-profile'
            afterSelectOrganizationUrl='/organization-profile'
        />
    );
}