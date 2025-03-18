"use client"
import { Bar, BarChart, CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample data for messages by hour
const messagesByHour = [
  { hour: "12am", user1: 5, user2: 10, total: 15 },
  { hour: "1am", user1: 3, user2: 5, total: 8 },
  { hour: "2am", user1: 2, user2: 3, total: 5 },
  { hour: "3am", user1: 1, user2: 1, total: 2 },
  { hour: "4am", user1: 0, user2: 0, total: 0 },
  { hour: "5am", user1: 0, user2: 1, total: 1 },
  { hour: "6am", user1: 1, user2: 2, total: 3 },
  { hour: "7am", user1: 5, user2: 7, total: 12 },
  { hour: "8am", user1: 12, user2: 13, total: 25 },
  { hour: "9am", user1: 20, user2: 25, total: 45 },
  { hour: "10am", user1: 22, user2: 30, total: 52 },
  { hour: "11am", user1: 25, user2: 35, total: 60 },
  { hour: "12pm", user1: 35, user2: 40, total: 75 },
  { hour: "1pm", user1: 30, user2: 32, total: 62 },
  { hour: "2pm", user1: 28, user2: 30, total: 58 },
  { hour: "3pm", user1: 23, user2: 25, total: 48 },
  { hour: "4pm", user1: 25, user2: 30, total: 55 },
  { hour: "5pm", user1: 30, user2: 40, total: 70 },
  { hour: "6pm", user1: 35, user2: 50, total: 85 },
  { hour: "7pm", user1: 42, user2: 50, total: 92 },
  { hour: "8pm", user1: 45, user2: 60, total: 105 },
  { hour: "9pm", user1: 50, user2: 70, total: 120 },
  { hour: "10pm", user1: 40, user2: 50, total: 90 },
  { hour: "11pm", user1: 20, user2: 25, total: 45 },
]

// Sample data for messages by day of week
const messagesByDay = [
  { day: "Mon", user1: 120, user2: 110, total: 230 },
  { day: "Tue", user1: 140, user2: 130, total: 270 },
  { day: "Wed", user1: 110, user2: 90, total: 200 },
  { day: "Thu", user1: 170, user2: 150, total: 320 },
  { day: "Fri", user1: 190, user2: 180, total: 370 },
  { day: "Sat", user1: 220, user2: 170, total: 390 },
  { day: "Sun", user1: 200, user2: 190, total: 390 },
]

// Sample data for messages by month
const messagesByMonth = [
  { month: "Jan", user1: 120, user2: 110, total: 230 },
  { month: "Feb", user1: 140, user2: 130, total: 270 },
  { month: "Mar", user1: 110, user2: 90, total: 200 },
  { month: "Apr", user1: 170, user2: 150, total: 320 },
  { month: "May", user1: 190, user2: 180, total: 370 },
  { month: "Jun", user1: 220, user2: 170, total: 390 },
]

// Sample data for response time trends
const responseTimeTrends = [
  { date: "Jan", user1: 55, user2: 40 },
  { date: "Feb", user1: 50, user2: 35 },
  { date: "Mar", user1: 45, user2: 32 },
  { date: "Apr", user1: 48, user2: 34 },
  { date: "May", user1: 45, user2: 32 },
  { date: "Jun", user1: 42, user2: 30 },
]

export function TimePatterns({ user1, user2 }: { user1: any; user2: any }) {
  const chartConfig = {
    total: {
      label: "Total",
      color: "hsl(var(--primary))",
    },
    user1: {
      label: user1.name,
      color: user1.color,
    },
    user2: {
      label: user2.name,
      color: user2.color,
    },
  }

  return (
    <div className="space-y-4">
      <Tabs defaultValue="daily" className="w-full">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="daily">Daily</TabsTrigger>
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
        </TabsList>

        <TabsContent value="daily" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Messages by Hour</CardTitle>
              <CardDescription>When you chat the most during the day</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] w-full">
                <ChartContainer config={chartConfig}>
                  <BarChart data={messagesByHour} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                    <XAxis dataKey="hour" tickLine={false} axisLine={false} tickMargin={8} interval={3} />
                    <YAxis hide />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="user1" stackId="a" fill={user1.color} radius={[0, 0, 0, 0]} />
                    <Bar dataKey="user2" stackId="a" fill={user2.color} radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ChartContainer>
              </div>
              <div className="mt-2 text-sm text-center">
                <div className="font-medium">Peak messaging time: 9:00 PM</div>
                <div className="text-xs text-muted-foreground mt-1">You exchange the most messages in the evening</div>
              </div>

              <Separator className="my-4" />

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm font-medium mb-1" style={{ color: user1.color }}>
                    {user1.name}'s Active Hours
                  </div>
                  <div className="text-xs">
                    Most active: <span className="font-medium">8:00 PM - 10:00 PM</span>
                  </div>
                  <div className="text-xs">
                    Least active: <span className="font-medium">2:00 AM - 6:00 AM</span>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium mb-1" style={{ color: user2.color }}>
                    {user2.name}'s Active Hours
                  </div>
                  <div className="text-xs">
                    Most active: <span className="font-medium">7:00 PM - 9:00 PM</span>
                  </div>
                  <div className="text-xs">
                    Least active: <span className="font-medium">3:00 AM - 5:00 AM</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Response Time Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Average Response Time</span>
                    <span className="text-sm">38 minutes</span>
                  </div>
                  <div className="text-xs text-muted-foreground mb-3">How long it typically takes to get a reply</div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm font-medium mb-1" style={{ color: user1.color }}>
                        {user1.name}
                      </div>
                      <div className="text-xl font-bold">{user1.responseTime}</div>
                      <div className="text-xs text-muted-foreground">average response time</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-1" style={{ color: user2.color }}>
                        {user2.name}
                      </div>
                      <div className="text-xl font-bold">{user2.responseTime}</div>
                      <div className="text-xs text-muted-foreground">average response time</div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <div className="text-sm font-medium mb-1">Response Time Trends</div>
                  <div className="h-[150px] w-full">
                    <ChartContainer config={chartConfig}>
                      <LineChart data={responseTimeTrends} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <CartesianGrid vertical={false} strokeDasharray="3 3" />
                        <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} />
                        <YAxis hide />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Line
                          type="monotone"
                          dataKey="user1"
                          stroke={user1.color}
                          strokeWidth={2}
                          dot={{ r: 4, fill: user1.color }}
                          activeDot={{ r: 6 }}
                        />
                        <Line
                          type="monotone"
                          dataKey="user2"
                          stroke={user2.color}
                          strokeWidth={2}
                          dot={{ r: 4, fill: user2.color }}
                          activeDot={{ r: 6 }}
                        />
                      </LineChart>
                    </ChartContainer>
                  </div>
                  <div className="text-xs text-center text-muted-foreground mt-2">
                    Response times have been improving over the last 6 months
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm font-medium mb-1">Fastest Response</div>
                    <div className="text-xl font-bold">30 seconds</div>
                    <div className="text-xs text-muted-foreground">from {user2.name} on June 15</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-1">Longest Wait</div>
                    <div className="text-xl font-bold">2 days, 4 hours</div>
                    <div className="text-xs text-muted-foreground">from {user1.name} on May 22</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="weekly" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Messages by Day of Week</CardTitle>
              <CardDescription>Your conversation patterns throughout the week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] w-full">
                <ChartContainer config={chartConfig}>
                  <BarChart data={messagesByDay} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                    <XAxis dataKey="day" tickLine={false} axisLine={false} tickMargin={8} />
                    <YAxis hide />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="user1" stackId="a" fill={user1.color} radius={[0, 0, 0, 0]} />
                    <Bar dataKey="user2" stackId="a" fill={user2.color} radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ChartContainer>
              </div>
              <div className="mt-2 text-sm text-center">
                <div className="font-medium">Most active day: Saturday</div>
                <div className="text-xs text-muted-foreground mt-1">You exchange the most messages on weekends</div>
              </div>

              <Separator className="my-4" />

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm font-medium mb-1" style={{ color: user1.color }}>
                    {user1.name}'s Pattern
                  </div>
                  <div className="text-xs">
                    Most active: <span className="font-medium">Saturday</span>
                  </div>
                  <div className="text-xs">
                    Least active: <span className="font-medium">Wednesday</span>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium mb-1" style={{ color: user2.color }}>
                    {user2.name}'s Pattern
                  </div>
                  <div className="text-xs">
                    Most active: <span className="font-medium">Saturday</span>
                  </div>
                  <div className="text-xs">
                    Least active: <span className="font-medium">Wednesday</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Weekly Conversation Patterns</CardTitle>
              <CardDescription>How your messaging habits change throughout the week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-medium mb-1">Weekday vs. Weekend</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col items-center">
                      <div className="text-xl font-bold">268</div>
                      <div className="text-xs text-muted-foreground">avg. weekday messages</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-xl font-bold">390</div>
                      <div className="text-xs text-muted-foreground">avg. weekend messages</div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <div className="text-sm font-medium mb-1">Response Time by Day</div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Monday</span>
                      <span className="font-medium">42 min</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Tuesday</span>
                      <span className="font-medium">38 min</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Wednesday</span>
                      <span className="font-medium">45 min</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Thursday</span>
                      <span className="font-medium">40 min</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Friday</span>
                      <span className="font-medium">35 min</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Saturday</span>
                      <span className="font-medium">25 min</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Sunday</span>
                      <span className="font-medium">28 min</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="monthly" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Messages by Month</CardTitle>
              <CardDescription>Conversation trends over the past year</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] w-full">
                <ChartContainer config={chartConfig}>
                  <BarChart data={messagesByMonth} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                    <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
                    <YAxis hide />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="user1" stackId="a" fill={user1.color} radius={[0, 0, 0, 0]} />
                    <Bar dataKey="user2" stackId="a" fill={user2.color} radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ChartContainer>
              </div>
              <div className="mt-2 text-sm text-center">
                <div className="font-medium">Highest activity: June</div>
                <div className="text-xs text-muted-foreground mt-1">Your conversation has been growing over time</div>
              </div>

              <Separator className="my-4" />

              <div className="space-y-3">
                <div className="text-sm font-medium">Monthly Trends</div>
                <div className="text-xs">
                  <span className="font-medium">Growth rate:</span> +12% per month
                </div>
                <div className="text-xs">
                  <span className="font-medium">Highest month:</span> June (390 messages)
                </div>
                <div className="text-xs">
                  <span className="font-medium">Lowest month:</span> March (200 messages)
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Seasonal Patterns</CardTitle>
              <CardDescription>How your communication changes with seasons</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center">
                    <div className="text-sm font-medium">Winter</div>
                    <div className="text-xl font-bold">250</div>
                    <div className="text-xs text-muted-foreground">avg. messages/month</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-sm font-medium">Spring</div>
                    <div className="text-xl font-bold">297</div>
                    <div className="text-xs text-muted-foreground">avg. messages/month</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center">
                    <div className="text-sm font-medium">Summer</div>
                    <div className="text-xl font-bold">390</div>
                    <div className="text-xs text-muted-foreground">avg. messages/month</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-sm font-medium">Fall</div>
                    <div className="text-xl font-bold">320</div>
                    <div className="text-xs text-muted-foreground">avg. messages/month</div>
                  </div>
                </div>

                <Separator />

                <div>
                  <div className="text-sm font-medium mb-1">Seasonal Insights</div>
                  <div className="text-xs text-muted-foreground">
                    Your communication increases significantly during summer months, possibly due to more free time and
                    activities to discuss. Winter shows the lowest activity, which might indicate busier schedules or
                    fewer shared experiences to talk about.
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

