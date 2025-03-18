"use client"

import * as React from "react"
import {
  ChevronDown,
  Clock,
  Flag,
  Heart,
  Home,
  MessageCircle,
  PieChart,
  Settings,
  ThumbsUp,
  Upload,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import { MessageMetrics } from "@/components/message-metrics"
import { TimePatterns } from "@/components/time-patterns"
import { RelationshipInsights } from "@/components/relationship-insights"
import { Recommendations } from "@/components/recommendations"

export default function RelationshipAnalyzer() {
  const [activeTab, setActiveTab] = React.useState("overview")
  const [isAnalyzing, setIsAnalyzing] = React.useState(false)
  const [isAnalysisComplete, setIsAnalysisComplete] = React.useState(true) // Set to true for demo purposes
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null)

  // Sample data - in a real app this would come from your analysis backend
  const user1 = {
    name: "Alex",
    avatar: "/placeholder.svg?height=40&width=40",
    messageCount: 1254,
    responseTime: "45 min",
    color: "hsl(var(--chart-1))",
  }

  const user2 = {
    name: "Jordan",
    avatar: "/placeholder.svg?height=40&width=40",
    messageCount: 1087,
    responseTime: "32 min",
    color: "hsl(var(--chart-2))",
  }

  const totalMessages = user1.messageCount + user2.messageCount
  const compatibilityScore = 78
  const reciprocityScore = 82

  // Handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handleAnalyze = () => {
    if (selectedFile) {
      setIsAnalyzing(true)

      // Simulate analysis process
      setTimeout(() => {
        setIsAnalyzing(false)
        setIsAnalysisComplete(true)
      }, 2000)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur">
        <div className="flex h-14 items-center px-4">
          <h1 className="text-xl font-semibold">Relationship Analyzer</h1>
          <div className="ml-auto flex items-center gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="gap-1">
                  <Upload className="h-4 w-4" />
                  <span className="hidden sm:inline">Upload Messages</span>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Upload Message Data</DialogTitle>
                  <DialogDescription>
                    Upload your conversation export file to analyze your relationship.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="message-file">Message File</Label>
                    <Input id="message-file" type="file" onChange={handleFileChange} accept=".json,.csv,.txt" />
                    <p className="text-xs text-muted-foreground">Supported formats: JSON, CSV, TXT</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="user1-name">First Person's Name</Label>
                      <Input id="user1-name" defaultValue="Alex" />
                    </div>
                    <div>
                      <Label htmlFor="user2-name">Second Person's Name</Label>
                      <Input id="user2-name" defaultValue="Jordan" />
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button onClick={handleAnalyze} disabled={!selectedFile || isAnalyzing}>
                    {isAnalyzing ? "Analyzing..." : "Analyze Relationship"}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main content area */}
      <main className="flex-1 overflow-auto">
        <div className="container px-4 py-4 md:py-6 max-w-md mx-auto">
          {!isAnalysisComplete ? (
            <Card className="text-center p-6">
              <CardHeader>
                <CardTitle>Upload Message Data</CardTitle>
                <CardDescription>
                  To begin analyzing your relationship, please upload your conversation data.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-4">
                <div className="border-2 border-dashed border-muted-foreground/20 rounded-lg p-8 w-full">
                  <div className="flex flex-col items-center gap-2">
                    <Upload className="h-8 w-8 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      Drag and drop your message export file here, or click to browse
                    </p>
                    <Input
                      type="file"
                      className="hidden"
                      id="file-upload"
                      onChange={handleFileChange}
                      accept=".json,.csv,.txt"
                    />
                    <Label
                      htmlFor="file-upload"
                      className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm cursor-pointer"
                    >
                      Select File
                    </Label>
                  </div>
                </div>
                {selectedFile && (
                  <div className="text-sm">
                    Selected file: <span className="font-medium">{selectedFile.name}</span>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button onClick={handleAnalyze} disabled={!selectedFile || isAnalyzing} className="w-full">
                  {isAnalyzing ? "Analyzing..." : "Analyze Relationship"}
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <>
              {/* User profiles */}
              <Card className="mb-4">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={user1.avatar} alt={user1.name} />
                        <AvatarFallback style={{ backgroundColor: user1.color }}>{user1.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{user1.name}</div>
                        <div className="text-sm text-muted-foreground">{user1.messageCount} messages</div>
                      </div>
                    </div>
                    <Heart className="h-6 w-6 text-rose-500" />
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="font-medium">{user2.name}</div>
                        <div className="text-sm text-muted-foreground">{user2.messageCount} messages</div>
                      </div>
                      <Avatar>
                        <AvatarImage src={user2.avatar} alt={user2.name} />
                        <AvatarFallback style={{ backgroundColor: user2.color }}>{user2.name[0]}</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Compatibility</span>
                      <span className="font-medium">{compatibilityScore}%</span>
                    </div>
                    <Progress value={compatibilityScore} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              {/* Tabs for different metric categories */}
              <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-5 mb-4">
                  <TabsTrigger value="overview">
                    <Home className="h-4 w-4 md:mr-2" />
                    <span className="hidden md:inline">Overview</span>
                  </TabsTrigger>
                  <TabsTrigger value="messages">
                    <MessageCircle className="h-4 w-4 md:mr-2" />
                    <span className="hidden md:inline">Messages</span>
                  </TabsTrigger>
                  <TabsTrigger value="patterns">
                    <Clock className="h-4 w-4 md:mr-2" />
                    <span className="hidden md:inline">Patterns</span>
                  </TabsTrigger>
                  <TabsTrigger value="insights">
                    <PieChart className="h-4 w-4 md:mr-2" />
                    <span className="hidden md:inline">Insights</span>
                  </TabsTrigger>
                  <TabsTrigger value="tips">
                    <ThumbsUp className="h-4 w-4 md:mr-2" />
                    <span className="hidden md:inline">Tips</span>
                  </TabsTrigger>
                </TabsList>

                {/* Overview Tab */}
                <TabsContent value="overview" className="space-y-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>Relationship Summary</CardTitle>
                      <CardDescription>Analysis based on {totalMessages} messages</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="text-sm font-medium">Compatibility</div>
                          <div className="flex items-center">
                            <Heart className="mr-2 h-4 w-4 text-rose-500" />
                            <div className="text-2xl font-bold">{compatibilityScore}%</div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-sm font-medium">Reciprocity</div>
                          <div className="flex items-center">
                            <ThumbsUp className="mr-2 h-4 w-4 text-blue-500" />
                            <div className="text-2xl font-bold">{reciprocityScore}%</div>
                          </div>
                        </div>
                      </div>

                      <Separator className="my-4" />

                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="mb-1 text-sm font-medium">Attachment Style</div>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <Badge variant="outline" className="bg-primary/10" style={{ borderColor: user1.color }}>
                                  {user1.name}: Secure
                                </Badge>
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <Button variant="ghost" size="icon" className="h-5 w-5 rounded-full">
                                        <ChevronDown className="h-3 w-3" />
                                      </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="w-60 text-xs">
                                        Secure attachment is characterized by trust, emotional availability, and healthy
                                        boundaries.
                                      </p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              </div>
                              <div className="flex items-center gap-2">
                                <Badge variant="outline" className="bg-primary/10" style={{ borderColor: user2.color }}>
                                  {user2.name}: Anxious
                                </Badge>
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <Button variant="ghost" size="icon" className="h-5 w-5 rounded-full">
                                        <ChevronDown className="h-3 w-3" />
                                      </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="w-60 text-xs">
                                        Anxious attachment is characterized by seeking reassurance and worrying about
                                        the relationship.
                                      </p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="mb-1 text-sm font-medium">Interest Level</div>
                            <div className="space-y-2">
                              <div>
                                <div className="flex justify-between text-xs mb-1">
                                  <span style={{ color: user1.color }}>{user1.name}</span>
                                  <span>85%</span>
                                </div>
                                <Progress value={85} className="h-2" style={{ backgroundColor: `${user1.color}30` }} />
                              </div>
                              <div>
                                <div className="flex justify-between text-xs mb-1">
                                  <span style={{ color: user2.color }}>{user2.name}</span>
                                  <span>90%</span>
                                </div>
                                <Progress value={90} className="h-2" style={{ backgroundColor: `${user2.color}30` }} />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="mb-1 text-sm font-medium">Green Flags</div>
                            <div className="flex items-center">
                              <Flag className="mr-2 h-4 w-4 text-green-500" />
                              <span>7 detected</span>
                            </div>
                          </div>
                          <div>
                            <div className="mb-1 text-sm font-medium">Red Flags</div>
                            <div className="flex items-center">
                              <Flag className="mr-2 h-4 w-4 text-red-500" />
                              <span>2 detected</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="grid grid-cols-2 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Response Time</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs" style={{ color: user1.color }}>
                              {user1.name}
                            </span>
                            <span className="text-sm font-medium">{user1.responseTime}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs" style={{ color: user2.color }}>
                              {user2.name}
                            </span>
                            <span className="text-sm font-medium">{user2.responseTime}</span>
                          </div>
                          <Separator className="my-1" />
                          <div className="flex items-center justify-between">
                            <span className="text-xs">Average</span>
                            <span className="text-sm font-medium">38 min</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Daily Messages</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs" style={{ color: user1.color }}>
                              {user1.name}
                            </span>
                            <span className="text-sm font-medium">13</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs" style={{ color: user2.color }}>
                              {user2.name}
                            </span>
                            <span className="text-sm font-medium">11</span>
                          </div>
                          <Separator className="my-1" />
                          <div className="flex items-center justify-between">
                            <span className="text-xs">Total</span>
                            <span className="text-sm font-medium">24</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>Top Emojis</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-5 gap-2">
                        <div className="flex flex-col items-center">
                          <div className="text-2xl">❤️</div>
                          <div className="flex mt-1 text-xs">
                            <span className="px-1 rounded" style={{ backgroundColor: user1.color }}>
                              78
                            </span>
                            <span className="px-1 rounded" style={{ backgroundColor: user2.color }}>
                              67
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="text-2xl">😂</div>
                          <div className="flex mt-1 text-xs">
                            <span className="px-1 rounded" style={{ backgroundColor: user1.color }}>
                              65
                            </span>
                            <span className="px-1 rounded" style={{ backgroundColor: user2.color }}>
                              47
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="text-2xl">👍</div>
                          <div className="flex mt-1 text-xs">
                            <span className="px-1 rounded" style={{ backgroundColor: user1.color }}>
                              42
                            </span>
                            <span className="px-1 rounded" style={{ backgroundColor: user2.color }}>
                              56
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="text-2xl">😊</div>
                          <div className="flex mt-1 text-xs">
                            <span className="px-1 rounded" style={{ backgroundColor: user1.color }}>
                              39
                            </span>
                            <span className="px-1 rounded" style={{ backgroundColor: user2.color }}>
                              48
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="text-2xl">🎉</div>
                          <div className="flex mt-1 text-xs">
                            <span className="px-1 rounded" style={{ backgroundColor: user1.color }}>
                              35
                            </span>
                            <span className="px-1 rounded" style={{ backgroundColor: user2.color }}>
                              41
                            </span>
                          </div>
                        </div>
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
                </TabsContent>

                {/* Messages Tab */}
                <TabsContent value="messages">
                  <MessageMetrics user1={user1} user2={user2} totalMessages={totalMessages} />
                </TabsContent>

                {/* Patterns Tab */}
                <TabsContent value="patterns">
                  <TimePatterns user1={user1} user2={user2} />
                </TabsContent>

                {/* Insights Tab */}
                <TabsContent value="insights">
                  <RelationshipInsights user1={user1} user2={user2} />
                </TabsContent>

                {/* Tips Tab */}
                <TabsContent value="tips">
                  <Recommendations user1={user1} user2={user2} />
                </TabsContent>
              </Tabs>
            </>
          )}
        </div>
      </main>
    </div>
  )
}

