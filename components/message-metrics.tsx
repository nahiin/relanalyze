"use client"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, XAxis, YAxis } from "recharts"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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

// Sample data for topic distribution
const topicData = [
  { name: "Daily Life", value: 35, user1: 18, user2: 17 },
  { name: "Future Plans", value: 20, user1: 12, user2: 8 },
  { name: "Feelings", value: 15, user1: 6, user2: 9 },
  { name: "Shared Interests", value: 12, user1: 5, user2: 7 },
  { name: "Work/School", value: 10, user1: 6, user2: 4 },
  { name: "Other", value: 8, user1: 3, user2: 5 },
]

// Sample data for most used emojis
const emojiData = [
  { emoji: "❤️", user1: 78, user2: 67, total: 145 },
  { emoji: "😂", user1: 65, user2: 47, total: 112 },
  { emoji: "👍", user1: 42, user2: 56, total: 98 },
  { emoji: "😊", user1: 39, user2: 48, total: 87 },
  { emoji: "🎉", user1: 35, user2: 41, total: 76 },
]

export function MessageMetrics({
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
      <Tabs defaultValue="distribution" className="w-full">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="distribution">Distribution</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="topics">Topics</TabsTrigger>
        </TabsList>

        <TabsContent value="distribution" className="space-y-4">
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
                  <div className="text-sm font-medium" style={{ color: user1.color }}>
                    {user1.name}
                  </div>
                  <div className="text-2xl font-bold">{user1.messageCount}</div>
                  <div className="text-xs text-muted-foreground">messages sent</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-sm font-medium" style={{ color: user2.color }}>
                    {user2.name}
                  </div>
                  <div className="text-2xl font-bold">{user2.messageCount}</div>
                  <div className="text-xs text-muted-foreground">messages sent</div>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="space-y-4">
                <div>
                  <div className="text-sm font-medium">Message Ratio</div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs">
                      {user1.name} : {user2.name}
                    </span>
                    <span className="font-medium">{(user1.messageCount / user2.messageCount).toFixed(2)}:1</span>
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium">Message Frequency</div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs">Daily average</span>
                    <span className="font-medium">24 messages</span>
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium">Conversation Initiator</div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs">Who starts conversations</span>
                    <Badge style={{ backgroundColor: user1.color, color: "white" }}>{user1.name} (62%)</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Message Length</CardTitle>
              <CardDescription>Average characters per message</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] w-full">
                <ChartContainer config={chartConfig}>
                  <BarChart
                    data={[
                      { name: "Short (<50)", [user1.name]: 420, [user2.name]: 380 },
                      { name: "Medium (50-150)", [user1.name]: 680, [user2.name]: 520 },
                      { name: "Long (>150)", [user1.name]: 154, [user2.name]: 187 },
                    ]}
                    margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                  >
                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                    <XAxis dataKey="name" tickLine={false} axisLine={false} tickMargin={8} />
                    <YAxis hide />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey={user1.name} fill={user1.color} radius={[4, 4, 0, 0]} />
                    <Bar dataKey={user2.name} fill={user2.color} radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ChartContainer>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center">
                  <div className="text-sm font-medium" style={{ color: user1.color }}>
                    {user1.name}
                  </div>
                  <div className="text-2xl font-bold">87</div>
                  <div className="text-xs text-muted-foreground">avg. characters</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-sm font-medium" style={{ color: user2.color }}>
                    {user2.name}
                  </div>
                  <div className="text-2xl font-bold">104</div>
                  <div className="text-xs text-muted-foreground">avg. characters</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="content" className="space-y-4">
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
                        style={{
                          width: `${(item.user1 / item.count) * 100}%`,
                          backgroundColor: user1.color,
                        }}
                      />
                      <div
                        style={{
                          width: `${(item.user2 / item.count) * 100}%`,
                          backgroundColor: user2.color,
                        }}
                      />
                    </div>
                    <div className="flex justify-between text-xs mt-1">
                      <span style={{ color: user1.color }}>
                        {user1.name}: {item.user1}
                      </span>
                      <span style={{ color: user2.color }}>
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
              <CardTitle>Most Used Emojis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-5 gap-4">
                {emojiData.map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="text-3xl mb-1">{item.emoji}</div>
                    <div className="text-xs text-center">
                      <div className="font-medium">{item.total}</div>
                      <div className="flex justify-center gap-1 text-muted-foreground">
                        <span className="px-1 rounded" style={{ backgroundColor: user1.color }}>
                          {item.user1}
                        </span>
                        <span className="px-1 rounded" style={{ backgroundColor: user2.color }}>
                          {item.user2}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-1 mr-3">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: user1.color }}></div>
                  <span>{user1.name}</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: user2.color }}></div>
                  <span>{user2.name}</span>
                </div>
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
                      <span
                        className="font-medium"
                        style={{
                          color: message.user === user1.name ? user1.color : user2.color,
                        }}
                      >
                        {message.user}
                      </span>
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
        </TabsContent>

        <TabsContent value="topics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Topic Distribution</CardTitle>
              <CardDescription>What you talk about most frequently</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] w-full flex justify-center">
                <ChartContainer config={chartConfig}>
                  <PieChart width={200} height={200}>
                    <Pie
                      data={topicData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {topicData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={`hsl(${index * 40}, 70%, 60%)`} />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </PieChart>
                </ChartContainer>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2">
                {topicData.map((topic, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: `hsl(${index * 40}, 70%, 60%)` }} />
                    <div className="text-sm">
                      {topic.name} ({topic.value}%)
                    </div>
                  </div>
                ))}
              </div>

              <Separator className="my-4" />

              <div className="space-y-3">
                <div className="text-sm font-medium">Topic Engagement by Person</div>
                {topicData.map((topic, index) => (
                  <div key={index}>
                    <div className="text-xs mb-1">{topic.name}</div>
                    <div className="flex h-2 overflow-hidden rounded-full bg-secondary">
                      <div
                        style={{
                          width: `${(topic.user1 / topic.value) * 100}%`,
                          backgroundColor: user1.color,
                        }}
                      />
                      <div
                        style={{
                          width: `${(topic.user2 / topic.value) * 100}%`,
                          backgroundColor: user2.color,
                        }}
                      />
                    </div>
                  </div>
                ))}
                <div className="flex justify-center mt-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1 mr-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: user1.color }}></div>
                    <span>{user1.name}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: user2.color }}></div>
                    <span>{user2.name}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Affectionate Nicknames</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <div className="text-sm font-medium mb-1" style={{ color: user1.color }}>
                    {user1.name} calls {user2.name}:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Honey</Badge>
                    <Badge variant="secondary">Babe</Badge>
                    <Badge variant="secondary">Sweetheart</Badge>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium mb-1" style={{ color: user2.color }}>
                    {user2.name} calls {user1.name}:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Love</Badge>
                    <Badge variant="secondary">Darling</Badge>
                    <Badge variant="secondary">Cutie</Badge>
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

