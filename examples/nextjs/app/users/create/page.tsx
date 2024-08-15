"use client";
import { CreatePage } from "@ferdiunal/refine-admin";
import { UserForm } from "@/app/users/components/Form";

const UserCreate = () => {
    return (
        <CreatePage>
            <UserForm redirect="edit" />
        </CreatePage>
    );
};

export default UserCreate;
