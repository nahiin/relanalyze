"use client"
import { Flag } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function RelationshipInsights({ user1, user2 }: { user1: any; user2: any }) {
  return (
    <div className="space-y-4">
      <Tabs defaultValue="attachment" className="w-full">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="attachment">Attachment</TabsTrigger>
          <TabsTrigger value="flags">Flags</TabsTrigger>
          <TabsTrigger value="compatibility">Compatibility</TabsTrigger>
        </TabsList>

        <TabsContent value="attachment" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Attachment Style</CardTitle>
              <CardDescription>Based on communication patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium" style={{ color: user1.color }}>
                      {user1.name}
                    </span>
                    <Badge variant="outline" style={{ borderColor: user1.color }}>
                      Secure
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground mb-3">
                    Shows consistent communication patterns and emotional availability
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium" style={{ color: user2.color }}>
                      {user2.name}
                    </span>
                    <Badge variant="outline" style={{ borderColor: user2.color }}>
                      Anxious-Preoccupied
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground mb-3">
                    Seeks more reassurance and responds quickly to messages
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium mb-1">Compatibility</div>
                  <div className="text-muted-foreground text-sm">
                    This pairing can work well as the secure partner provides stability while being responsive to the
                    anxious partner's needs.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Interest Levels</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium" style={{ color: user1.color }}>
                      {user1.name}
                    </span>
                    <span>85%</span>
                  </div>
                  <Progress value={85} className="h-2" style={{ backgroundColor: `${user1.color}30` }} />
                  <div className="text-xs text-muted-foreground mt-1">
                    High interest - initiates conversations frequently
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium" style={{ color: user2.color }}>
                      {user2.name}
                    </span>
                    <span>90%</span>
                  </div>
                  <Progress value={90} className="h-2" style={{ backgroundColor: `${user2.color}30` }} />
                  <div className="text-xs text-muted-foreground mt-1">
                    Very high interest - responds quickly and engages deeply
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Reciprocity Score</CardTitle>
              <CardDescription>Balance in your communication</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-4">
                <div className="text-4xl font-bold">82%</div>
                <div className="text-sm text-muted-foreground">Healthy balance</div>
              </div>

              <div className="space-y-2">
                <div className="text-sm">
                  <span className="font-medium">Message Ratio:</span> 1.15:1 ({user1.name}:{user2.name})
                </div>
                <div className="text-sm">
                  <span className="font-medium">Response Rate:</span> 98%
                </div>
                <div className="text-sm">
                  <span className="font-medium">Question Balance:</span> Even
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="flags" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Green Flags</CardTitle>
              <CardDescription>Positive indicators in your relationship</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Flag className="h-4 w-4 text-green-500" />
                  <div className="font-medium">Consistent Communication</div>
                </div>
                <div className="text-sm text-muted-foreground pl-6">
                  You both maintain regular messaging patterns, showing commitment to staying connected. {user1.name}{" "}
                  sends an average of {Math.floor(user1.messageCount / 180)} messages per day, while {user2.name} sends{" "}
                  {Math.floor(user2.messageCount / 180)}.
                </div>

                <div className="flex items-center gap-2">
                  <Flag className="h-4 w-4 text-green-500" />
                  <div className="font-medium">Emotional Support</div>
                </div>
                <div className="text-sm text-muted-foreground pl-6">
                  Both of you frequently express care and concern. Words like "care," "support," and "understand" appear
                  frequently in your conversations.
                </div>

                <div className="flex items-center gap-2">
                  <Flag className="h-4 w-4 text-green-500" />
                  <div className="font-medium">Shared Humor</div>
                </div>
                <div className="text-sm text-muted-foreground pl-6">
                  Your conversations include frequent use of humor and inside jokes, indicated by laughter emojis and
                  playful language.
                </div>

                <div className="flex items-center gap-2">
                  <Flag className="h-4 w-4 text-green-500" />
                  <div className="font-medium">Balanced Engagement</div>
                </div>
                <div className="text-sm text-muted-foreground pl-6">
                  Both partners contribute relatively equally to conversations, with a message ratio of 1.15:1.
                </div>

                <div className="flex items-center gap-2">
                  <Flag className="h-4 w-4 text-green-500" />
                  <div className="font-medium">Affectionate Language</div>
                </div>
                <div className="text-sm text-muted-foreground pl-6">
                  You use pet names and terms of endearment regularly, showing affection and closeness.
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Red Flags</CardTitle>
              <CardDescription>Areas that may need attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Flag className="h-4 w-4 text-red-500" />
                  <div className="font-medium">Occasional Conflict Avoidance</div>
                </div>
                <div className="text-sm text-muted-foreground pl-6">
                  Some difficult topics appear to be sidestepped. Conversations sometimes abruptly change subject when
                  potentially sensitive topics arise.
                </div>

                <div className="flex items-center gap-2">
                  <Flag className="h-4 w-4 text-red-500" />
                  <div className="font-medium">Imbalanced Response Times</div>
                </div>
                <div className="text-sm text-muted-foreground pl-6">
                  {user2.name} responds much faster than {user1.name} (average {user2.responseTime} vs.{" "}
                  {user1.responseTime}), which could create expectation mismatches.
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Flag Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-sm">
                  Your relationship shows significantly more green flags (7) than red flags (2), which is a positive
                  indicator of relationship health. The red flags identified are relatively minor and common in many
                  relationships.
                </div>

                <div className="text-sm font-medium">Flag Ratio</div>
                <div className="flex h-4 overflow-hidden rounded-full bg-secondary">
                  <div className="bg-green-500" style={{ width: `${(7 / 9) * 100}%` }} />
                  <div className="bg-red-500" style={{ width: `${(2 / 9) * 100}%` }} />
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-green-500">7 Green Flags</span>
                  <span className="text-red-500">2 Red Flags</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="compatibility" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Overall Compatibility</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-4">
                <div className="text-4xl font-bold">78%</div>
                <div className="text-sm text-muted-foreground">Strong compatibility</div>
              </div>

              <div className="space-y-2">
                <div>
                  <div className="text-sm font-medium mb-1">Communication Style</div>
                  <div className="flex items-center">
                    <Progress value={85} className="h-2 flex-1" />
                    <span className="ml-2 text-sm">85%</span>
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium mb-1">Emotional Connection</div>
                  <div className="flex items-center">
                    <Progress value={90} className="h-2 flex-1" />
                    <span className="ml-2 text-sm">90%</span>
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium mb-1">Conflict Resolution</div>
                  <div className="flex items-center">
                    <Progress value={65} className="h-2 flex-1" />
                    <span className="ml-2 text-sm">65%</span>
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium mb-1">Shared Interests</div>
                  <div className="flex items-center">
                    <Progress value={72} className="h-2 flex-1" />
                    <span className="ml-2 text-sm">72%</span>
                  </div>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="text-sm">
                <div className="font-medium mb-1">Summary</div>
                <p className="text-muted-foreground">
                  Your communication patterns show a strong foundation for a healthy relationship. With some minor
                  adjustments to response times and topic diversity, your compatibility could improve even further.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Personal Evaluation</CardTitle>
              <CardDescription>Based on messaging sentiment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-medium mb-1" style={{ color: user1.color }}>
                    {user1.name}'s Communication Style
                  </div>
                  <div className="space-y-1">
                    <Badge className="mr-1">Thoughtful</Badge>
                    <Badge className="mr-1">Direct</Badge>
                    <Badge className="mr-1">Supportive</Badge>
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">
                    Tends to be more deliberate in responses, with longer but less frequent messages.
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium mb-1" style={{ color: user2.color }}>
                    {user2.name}'s Communication Style
                  </div>
                  <div className="space-y-1">
                    <Badge className="mr-1">Enthusiastic</Badge>
                    <Badge className="mr-1">Responsive</Badge>
                    <Badge className="mr-1">Expressive</Badge>
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">
                    Communicates more frequently with shorter messages and more emojis.
                  </div>
                </div>

                <Separator />

                <div>
                  <div className="text-sm font-medium mb-1">Complementary Traits</div>
                  <div className="text-xs text-muted-foreground">
                    Your different communication styles actually complement each other well. {user1.name}'s
                    thoughtfulness balances {user2.name}'s expressiveness, creating a dynamic where both depth and
                    frequency of communication are present.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

