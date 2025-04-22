
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TeamCard } from "@/components/team/TeamCard";
import { TeamMemberCard } from "@/components/team/TeamMemberCard";
import { AddTeamDialog } from "@/components/team/AddTeamDialog";
import { teams, teamMembers } from "@/data/mockTeam";
import { useState } from "react";
import { Team } from "@/types/team";
import { toast } from "sonner";

const TeamPage = () => {
  const [activeTeams, setActiveTeams] = useState<Team[]>(teams);
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  
  const handleAddTeam = (data: { name: string; description: string }) => {
    const newTeam: Team = {
      id: `team-${activeTeams.length + 1}`,
      name: data.name,
      description: data.description,
      members: [],
      createdAt: new Date().toISOString(),
    };
    
    setActiveTeams([...activeTeams, newTeam]);
    toast.success("Team created successfully");
  };

  return (
    <PageLayout>
      <PageHeader 
        title="Team Management" 
        description="Manage your research teams and members"
      >
        <AddTeamDialog onAddTeam={handleAddTeam} />
      </PageHeader>

      <Tabs defaultValue="teams" className="space-y-4">
        <TabsList>
          <TabsTrigger value="teams">Teams</TabsTrigger>
          <TabsTrigger value="members">All Members</TabsTrigger>
        </TabsList>
        
        <TabsContent value="teams" className="space-y-4">
          {selectedTeam ? (
            <div className="space-y-4 animate-fade-in">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-semibold">{selectedTeam.name}</h2>
                  <p className="text-muted-foreground">{selectedTeam.description}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => setSelectedTeam(null)}>
                    Back to Teams
                  </Button>
                  <Button>Edit Team</Button>
                </div>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Team Members</CardTitle>
                  <CardDescription>
                    {selectedTeam.members.length} members in this team
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {selectedTeam.members.map((member) => (
                      <TeamMemberCard key={member.id} member={member} />
                    ))}
                    
                    <Card className="flex items-center justify-center h-full border-dashed cursor-pointer hover:bg-accent/50 transition-colors">
                      <CardContent className="flex flex-col items-center justify-center py-8">
                        <Plus className="h-8 w-8 text-muted-foreground mb-2" />
                        <p className="text-muted-foreground">Add New Member</p>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {activeTeams.map((team) => (
                <TeamCard 
                  key={team.id} 
                  team={team}
                  onClick={() => setSelectedTeam(team)}
                />
              ))}
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="members" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </PageLayout>
  );
};

export default TeamPage;

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
