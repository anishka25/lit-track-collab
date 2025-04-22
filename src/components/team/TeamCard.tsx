
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Team } from "@/types/team";
import { Users } from "lucide-react";

interface TeamCardProps {
  team: Team;
  onClick: () => void;
}

export function TeamCard({ team, onClick }: TeamCardProps) {
  return (
    <Card className="hover:bg-accent/50 cursor-pointer transition-colors animate-fade-in" onClick={onClick}>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5 text-primary" />
          {team.name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{team.description}</p>
        <div className="flex -space-x-2">
          {team.members.slice(0, 5).map((member) => (
            <Avatar key={member.id} className="border-2 border-background w-8 h-8">
              <img src={member.avatar} alt={member.name} />
            </Avatar>
          ))}
          {team.members.length > 5 && (
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted text-xs font-medium">
              +{team.members.length - 5}
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <div className="text-xs text-muted-foreground">
          Created on {new Date(team.createdAt).toLocaleDateString()}
        </div>
      </CardFooter>
    </Card>
  );
}
