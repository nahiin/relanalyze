"use client"
import { ThumbsUp } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Recommendations({ user1, user2 }: { user1: any; user2: any }) {
  return (
    <div className="space-y-4">
      <Tabs defaultValue="tips" className="w-full">
        <TabsList className="grid grid-cols-2 mb-4">
          <TabsTrigger value="tips">Personalized Tips</TabsTrigger>
          <TabsTrigger value="methods">Improvement Methods</TabsTrigger>
        </TabsList>

        <TabsContent value="tips" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>For {user1.name}</CardTitle>
              <CardDescription>Personalized suggestions based on your communication patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <ThumbsUp className="h-4 w-4 text-green-500" />
                    <div className="font-medium">Response Time</div>
                  </div>
                  <div className="text-sm text-muted-foreground pl-6">
                    Try to reduce your average response time of {user1.responseTime}, as {user2.name} tends to reply
                    more quickly ({user2.responseTime}). This imbalance can sometimes create anxiety for partners with
                    an anxious attachment style.
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <ThumbsUp className="h-4 w-4 text-green-500" />
                    <div className="font-medium">Emotional Expression</div>
                  </div>
                  <div className="text-sm text-muted-foreground pl-6">
                    Consider using more emotional language and emojis in your messages. Your communication style tends
                    to be more direct and practical, while {user2.name} uses more expressive language.
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <ThumbsUp className="h-4 w-4 text-green-500" />
                    <div className="font-medium">Conflict Approach</div>
                  </div>
                  <div className="text-sm text-muted-foreground pl-6">
                    When difficult topics arise, try to address them directly rather than changing the subject. Your
                    pattern shows a tendency to avoid potential conflicts, which can prevent resolution.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>For {user2.name}</CardTitle>
              <CardDescription>Personalized suggestions based on your communication patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <ThumbsUp className="h-4 w-4 text-green-500" />
                    <div className="font-medium">Message Length</div>
                  </div>
                  <div className="text-sm text-muted-foreground pl-6">
                    Your messages tend to be shorter than {user1.name}'s. Consider occasionally sending more detailed
                    messages to match their communication style.
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <ThumbsUp className="h-4 w-4 text-green-500" />
                    <div className="font-medium">Reassurance Seeking</div>
                  </div>
                  <div className="text-sm text-muted-foreground pl-6">
                    Try to reduce frequency of seeking reassurance in conversations. Your anxious attachment style
                    sometimes leads to repeated requests for confirmation, which can create pressure.
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <ThumbsUp className="h-4 w-4 text-green-500" />
                    <div className="font-medium">Response Expectations</div>
                  </div>
                  <div className="text-sm text-muted-foreground pl-6">
                    Be mindful that {user1.name} has a different response pattern than you. Their longer response times
                    don't necessarily indicate lack of interest.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>For Both</CardTitle>
              <CardDescription>Suggestions that can benefit your relationship</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <ThumbsUp className="h-4 w-4 text-green-500" />
                    <div className="font-medium">Topic Diversity</div>
                  </div>
                  <div className="text-sm text-muted-foreground pl-6">
                    Try to expand your conversation topics beyond daily life. Your most common topic (35% of messages)
                    is about day-to-day activities. Consider discussing more future plans, shared interests, and deeper
                    topics.
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <ThumbsUp className="h-4 w-4 text-green-500" />
                    <div className="font-medium">Deeper Discussions</div>
                  </div>
                  <div className="text-sm text-muted-foreground pl-6">
                    Consider having more conversations about future plans and goals. These topics currently make up only
                    20% of your discussions but show high engagement from both of you.
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <ThumbsUp className="h-4 w-4 text-green-500" />
                    <div className="font-medium">Response Time Expectations</div>
                  </div>
                  <div className="text-sm text-muted-foreground pl-6">
                    Discuss and align on expectations for response times. Your different patterns ({user1.responseTime}{" "}
                    vs. {user2.responseTime}) could be a source of misunderstanding.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="methods" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Communication Exercises</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-sm">
                  <div className="font-medium mb-1">High-Low Exercise</div>
                  <p className="text-muted-foreground">
                    Each day, share your highest and lowest moment. This encourages regular, meaningful communication
                    and helps you stay connected to each other's daily experiences.
                  </p>
                </div>

                <div className="text-sm">
                  <div className="font-medium mb-1">Question Game</div>
                  <p className="text-muted-foreground">
                    Take turns asking each other thoughtful questions. You can use prompt cards or find questions
                    online. This helps deepen your understanding of each other beyond daily conversations.
                  </p>
                </div>

                <div className="text-sm">
                  <div className="font-medium mb-1">Appreciation Messages</div>
                  <p className="text-muted-foreground">
                    Once a week, send a message specifically expressing something you appreciate about the other person.
                    This builds positive sentiment and reinforces connection.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Practical Strategies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-sm">
                  <div className="font-medium mb-1">Response Time Awareness</div>
                  <p className="text-muted-foreground">
                    Set expectations about response times. If you'll be busy, let the other person know in advance. This
                    is especially important given your different response patterns.
                  </p>
                </div>

                <div className="text-sm">
                  <div className="font-medium mb-1">Topic Expansion</div>
                  <p className="text-muted-foreground">
                    Use conversation starters or questions to explore new topics together. This can deepen your
                    connection and prevent conversations from becoming routine.
                  </p>
                </div>

                <div className="text-sm">
                  <div className="font-medium mb-1">Active Listening</div>
                  <p className="text-muted-foreground">
                    Practice responding to what the other person says before changing the subject. This shows you're
                    truly listening and values their thoughts.
                  </p>
                </div>

                <div className="text-sm">
                  <div className="font-medium mb-1">Scheduled Check-ins</div>
                  <p className="text-muted-foreground">
                    Set aside specific times for deeper conversations, especially if your daily messages tend to focus
                    on logistics and daily activities.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Attachment Style Compatibility</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-medium mb-1">For {user1.name} (Secure)</div>
                  <div className="text-sm text-muted-foreground">
                    As the secure partner, you can help by providing consistent reassurance without being prompted. Be
                    mindful that {user2.name}'s need for more frequent communication comes from their attachment style,
                    not neediness.
                  </div>
                </div>

                <Separator className="my-2" />

                <div>
                  <div className="text-sm font-medium mb-1">For {user2.name} (Anxious)</div>
                  <div className="text-sm text-muted-foreground">
                    Work on self-soothing techniques when feeling anxious about response times. Remember that{" "}
                    {user1.name}'s longer response times aren't a reflection of their interest in you.
                  </div>
                </div>

                <Separator className="my-2" />

                <div>
                  <div className="text-sm font-medium mb-1">Together</div>
                  <div className="text-sm text-muted-foreground">
                    Have an open conversation about your attachment styles and how they affect your communication
                    patterns. Understanding each other's needs can prevent misunderstandings and strengthen your
                    connection.
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

