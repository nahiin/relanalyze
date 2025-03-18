"use client"

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Separator } from "@/components/ui/separator"

// Sample data for message distribution
const messageDistributionData = [
  { name: "Jan", user1: 120, user2: 110 },
  { name: "Feb", user1: 140, user2: 130 },
  { name: "Mar", user1: 110, user2: 90 },
  { name: "Apr", user1: 170, user2: 150 },
  { name: "May", user1: 190, user2: 180 },
  { name: "Jun", user1: 220, user2: 170 },
]

// Sample data for most used words
const mostUsedWords = [
  { word: "love", count: 145, user1: 78, user2: 67 },
  { word: "miss", count: 112, user1: 65, user2: 47 },
  { word: "good", count: 98, user1: 42, user2: 56 },
  { word: "time", count: 87, user1: 39, user2: 48 },
  { word: "day", count: 76, user1: 35, user2: 41 },
]

// Sample data for longest messages
const longestMessages = [
  {
    user: "Alex",
    preview: "I was thinking about what you said yesterday and I really appreciate...",
    length: 245,
    date: "Jun 15",
  },
  {
    user: "Jordan",
    preview: "That reminds me of the time we went to that restaurant and the waiter...",
    length: 230,
    date: "May 28",
  },
  {
    user: "Alex",
    preview: "I've been reflecting on our conversation about future plans and I think...",
    length: 218,
    date: "Jun 2",
  },
]

export function MessageStats({
  user1,
  user2,
  totalMessages,
}: {
  user1: any
  user2: any
  totalMessages: number
}) {
  const chartConfig = {
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
      <Card>
        <CardHeader>
          <CardTitle>Message Distribution</CardTitle>
          <CardDescription>Total of {totalMessages} messages exchanged</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] w-full">
            <ChartContainer config={chartConfig}>
              <AreaChart data={messageDistributionData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis dataKey="name" tickLine={false} axisLine={false} tickMargin={8} />
                <YAxis hide />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area
                  type="monotone"
                  dataKey="user2"
                  stackId="1"
                  stroke={user2.color}
                  fill={user2.color}
                  fillOpacity={0.6}
                />
                <Area
                  type="monotone"
                  dataKey="user1"
                  stackId="1"
                  stroke={user1.color}
                  fill={user1.color}
                  fillOpacity={0.6}
                />
              </AreaChart>
            </ChartContainer>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center">
              <div className="text-sm font-medium">{user1.name}</div>
              <div className="text-2xl font-bold">{user1.messageCount}</div>
              <div className="text-xs text-muted-foreground">messages sent</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-sm font-medium">{user2.name}</div>
              <div className="text-2xl font-bold">{user2.messageCount}</div>
              <div className="text-xs text-muted-foreground">messages sent</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Most Used Words</CardTitle>
          <CardDescription>Common vocabulary in your conversations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mostUsedWords.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">"{item.word}"</span>
                  <span className="text-muted-foreground">{item.count} times</span>
                </div>
                <div className="flex h-2 overflow-hidden rounded-full bg-secondary">
                  <div
                    className="bg-primary"
                    style={{
                      width: `${(item.user1 / item.count) * 100}%`,
                      backgroundColor: user1.color,
                    }}
                  />
                  <div
                    className="bg-primary"
                    style={{
                      width: `${(item.user2 / item.count) * 100}%`,
                      backgroundColor: user2.color,
                    }}
                  />
                </div>
                <div className="flex justify-between text-xs mt-1">
                  <span>
                    {user1.name}: {item.user1}
                  </span>
                  <span>
                    {user2.name}: {item.user2}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Longest Messages</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {longestMessages.map((message, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between">
                  <span className="font-medium">{message.user}</span>
                  <span className="text-xs text-muted-foreground">{message.date}</span>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">{message.preview}</p>
                <div className="text-xs">{message.length} characters</div>
                {index < longestMessages.length - 1 && <Separator className="mt-2" />}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Most Used Emojis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-5 gap-4">
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-1">❤️</div>
              <div className="text-xs text-center">
                <div className="font-medium">145</div>
                <div className="text-muted-foreground">times</div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-1">😂</div>
              <div className="text-xs text-center">
                <div className="font-medium">112</div>
                <div className="text-muted-foreground">times</div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-1">👍</div>
              <div className="text-xs text-center">
                <div className="font-medium">98</div>
                <div className="text-muted-foreground">times</div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-1">😊</div>
              <div className="text-xs text-center">
                <div className="font-medium">87</div>
                <div className="text-muted-foreground">times</div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-1">🎉</div>
              <div className="text-xs text-center">
                <div className="font-medium">76</div>
                <div className="text-muted-foreground">times</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

