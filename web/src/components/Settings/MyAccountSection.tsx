import { MoreVerticalIcon, PenLineIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import useCurrentUser from "@/hooks/useCurrentUser";
import { useTranslate } from "@/utils/i18n";
import showChangeMemberPasswordDialog from "../ChangeMemberPasswordDialog";
import showUpdateAccountDialog from "../UpdateAccountDialog";
import UserAvatar from "../UserAvatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import AccessTokenSection from "./AccessTokenSection";
import UserSessionsSection from "./UserSessionsSection";

const MyAccountSection = () => {
  const t = useTranslate();
  const user = useCurrentUser();

  return (
    <div className="w-full gap-2 pt-2 pb-4">
      <p className="font-medium text-muted-foreground">{t("setting.account-section.title")}</p>
      <div className="w-full mt-2 flex flex-row justify-start items-center">
        <UserAvatar className="mr-2 shrink-0 w-10 h-10" avatarUrl={user.avatarUrl} />
        <div className="max-w-[calc(100%-3rem)] flex flex-col justify-center items-start">
          <p className="w-full">
            <span className="text-xl leading-tight font-medium">{user.displayName}</span>
            <span className="ml-1 text-base leading-tight text-muted-foreground">({user.username})</span>
          </p>
          <p className="w-4/5 leading-tight text-sm truncate">{user.description}</p>
        </div>
      </div>
      <div className="w-full flex flex-row justify-start items-center mt-2 space-x-2">
        <Button variant="outline" onClick={showUpdateAccountDialog}>
          <PenLineIcon className="w-4 h-4 mx-auto mr-1" />
          {t("common.edit")}
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <MoreVerticalIcon className="w-4 h-4 mx-auto" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem onClick={() => showChangeMemberPasswordDialog(user)}>
              {t("setting.account-section.change-password")}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <UserSessionsSection />
      <AccessTokenSection />
    </div>
  );
};

export default MyAccountSection;
