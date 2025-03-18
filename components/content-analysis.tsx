"use client"

import { Badge } from "@/components/ui/badge"

import { Pie, PieChart } from "recharts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Sample data for topic distribution
const topicData = [
  { name: "Daily Life", value: 35 },
  { name: "Future Plans", value: 20 },
  { name: "Feelings", value: 15 },
  { name: "Shared Interests", value: 12 },
  { name: "Work/School", value: 10 },
  { name: "Other", value: 8 },
]

export function ContentAnalysis() {
  const chartConfig = {
    value: {
      label: "Percentage",
      color: "hsl(var(--primary))",
    },
  }

  return (
    <div className="space-y-4">
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
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Affectionate Nicknames</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div>
              <div className="text-sm font-medium mb-1">Alex calls Jordan:</div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Honey</Badge>
                <Badge variant="secondary">Babe</Badge>
                <Badge variant="secondary">Sweetheart</Badge>
              </div>
            </div>
            <div>
              <div className="text-sm font-medium mb-1">Jordan calls Alex:</div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Love</Badge>
                <Badge variant="secondary">Darling</Badge>
                <Badge variant="secondary">Cutie</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Cell component for PieChart
function Cell({ fill, ...props }: { fill: string; [key: string]: any }) {
  return <path fill={fill} {...props} />
}

