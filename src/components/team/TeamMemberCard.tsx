
import { TeamMember } from "@/types/team";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Calendar, BarChartHorizontal } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  const progress = member.taskProgress ? 
    Math.round((member.taskProgress.completed / member.taskProgress.total) * 100) : 0;

  return (
    <Card className="animate-fade-in">
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <div className="flex items-center space-x-4">
          <Avatar className="w-12 h-12">
            <img src={member.avatar} alt={member.name} />
          </Avatar>
          <div>
            <h3 className="font-medium">{member.name}</h3>
            <p className="text-sm text-muted-foreground">{member.email}</p>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>View Profile</DropdownMenuItem>
            <DropdownMenuItem>Edit Member</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">Remove from Team</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className="space-y-4">
        <Badge variant="secondary" className="mb-2">{member.role}</Badge>
        
        {member.taskProgress && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-1">
                <BarChartHorizontal className="h-4 w-4 text-muted-foreground" />
                <span>Task Progress</span>
              </div>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
            <p className="text-xs text-muted-foreground">
              {member.taskProgress.completed} of {member.taskProgress.total} tasks completed
            </p>
          </div>
        )}
        
        {member.dailyUpdates && member.dailyUpdates.length > 0 && (
          <div className="space-y-2">
            <div className="flex items-center gap-1 text-sm font-medium">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <h4>Daily Updates</h4>
            </div>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {member.dailyUpdates.map(update => (
                <div key={update.id} className="bg-muted p-2 rounded-md">
                  <p className="text-xs font-medium text-muted-foreground">
                    {new Date(update.date).toLocaleDateString()}
                  </p>
                  <p className="text-sm">{update.content}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
