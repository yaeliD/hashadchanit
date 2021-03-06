USE [The_Matchmaker]
GO
/****** Object:  Table [dbo].[Candidates]    Script Date: 10/05/2021 17:41:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Candidates](
	[codeCandidates] [int] NOT NULL,
	[FNameCandidates] [varchar](50) NOT NULL,
	[LNameCandidates] [varchar](50) NOT NULL,
	[maleORfemale] [bit] NOT NULL,
	[dateOFbirth] [date] NOT NULL,
	[heightCandidates] [int] NOT NULL,
	[photoLink] [varchar](50) NULL,
	[currentNow] [varchar](50) NULL,
	[occupationAfter] [varchar](50) NOT NULL,
	[wigORhandkerchief] [bit] NULL,
	[addressCandidates] [int] NULL,
	[nameFather] [varchar](50) NULL,
	[nameMother] [varchar](50) NULL,
	[AdaFather] [int] NOT NULL,
	[AdaMother] [int] NOT NULL,
	[occupationFather] [varchar](50) NOT NULL,
	[occupationMother] [varchar](50) NULL,
	[familyStatus] [varchar](50) NOT NULL,
	[numberOFchildren] [int] NULL,
	[numberOFmarried] [int] NULL,
	[VonTOcontact1] [varchar](50) NOT NULL,
	[VonTOcontact2] [varchar](50) NULL,
 CONSTRAINT [PK__Candidat__9DE568AF9AC0B46C] PRIMARY KEY CLUSTERED 
(
	[codeCandidates] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[city]    Script Date: 10/05/2021 17:41:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[city](
	[CodeCity] [int] NOT NULL,
	[NameCity] [varchar](50) NULL,
 CONSTRAINT [PK_city] PRIMARY KEY CLUSTERED 
(
	[CodeCity] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[community]    Script Date: 10/05/2021 17:41:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[community](
	[codeC] [int] NOT NULL,
	[nameC] [varchar](50) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[codeC] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Constraints]    Script Date: 10/05/2021 17:41:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Constraints](
	[codeConstraintint] [int] NOT NULL,
	[codeCandidate] [int] NOT NULL,
	[nameSde] [varchar](50) NOT NULL,
	[valueC] [varchar](50) NOT NULL,
	[yesNo] [bit] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[codeConstraintint] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ListOfMosdot]    Script Date: 10/05/2021 17:41:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ListOfMosdot](
	[codeM] [int] NOT NULL,
	[nameM] [varchar](50) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[codeM] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[MosdotToCandidate]    Script Date: 10/05/2021 17:41:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MosdotToCandidate](
	[codeMC] [int] IDENTITY(1,1) NOT NULL,
	[codeMosad] [int] NULL,
	[codeCandidate] [int] NOT NULL,
	[yearOfFinish] [date] NULL,
 CONSTRAINT [PK__MosdotTo__47F92E44A4EE11B8] PRIMARY KEY CLUSTERED 
(
	[codeMC] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ProposalInProcess]    Script Date: 10/05/2021 17:41:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProposalInProcess](
	[codeP] [int] NOT NULL,
	[codeBT] [int] NOT NULL,
	[codeBN] [int] NOT NULL,
	[dateP] [date] NULL,
	[stepMeeting] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[codeP] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Shadchnit]    Script Date: 10/05/2021 17:41:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Shadchnit](
	[password_shadchanit] [int] NOT NULL,
	[username] [varchar](50) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[password_shadchanit] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[StepsOfProposal]    Script Date: 10/05/2021 17:41:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[StepsOfProposal](
	[stepPcode] [int] NOT NULL,
	[codeStep] [int] NOT NULL,
	[dateStep] [date] NULL,
	[comments] [varchar](50) NOT NULL,
	[results] [bit] NOT NULL,
 CONSTRAINT [PK_StepsOfProposal] PRIMARY KEY CLUSTERED 
(
	[stepPcode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TypesOfSteps]    Script Date: 10/05/2021 17:41:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TypesOfSteps](
	[codeTypeStep] [int] NOT NULL,
	[nameStep] [varchar](50) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[codeTypeStep] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[WhatImLookingFor]    Script Date: 10/05/2021 17:41:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[WhatImLookingFor](
	[AgeRange] [int] NULL,
	[HeightRange] [int] NULL,
	[Community] [int] NULL,
	[Statuse] [varchar](50) NULL,
	[WigORhandkerchief] [bit] NULL,
	[OccupationAfter] [varchar](50) NULL,
	[CodeCW] [int] NOT NULL,
	[City] [int] NULL,
 CONSTRAINT [PK_WhatImLookingFor] PRIMARY KEY CLUSTERED 
(
	[CodeCW] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Candidates]  WITH CHECK ADD  CONSTRAINT [FK_Candidates_city] FOREIGN KEY([addressCandidates])
REFERENCES [dbo].[city] ([CodeCity])
GO
ALTER TABLE [dbo].[Candidates] CHECK CONSTRAINT [FK_Candidates_city]
GO
ALTER TABLE [dbo].[Candidates]  WITH CHECK ADD  CONSTRAINT [FK_Candidates_community2] FOREIGN KEY([AdaFather])
REFERENCES [dbo].[community] ([codeC])
GO
ALTER TABLE [dbo].[Candidates] CHECK CONSTRAINT [FK_Candidates_community2]
GO
ALTER TABLE [dbo].[Candidates]  WITH CHECK ADD  CONSTRAINT [FK_Candidates_community3] FOREIGN KEY([AdaMother])
REFERENCES [dbo].[community] ([codeC])
GO
ALTER TABLE [dbo].[Candidates] CHECK CONSTRAINT [FK_Candidates_community3]
GO
ALTER TABLE [dbo].[Candidates]  WITH CHECK ADD  CONSTRAINT [FK_Candidates_WhatImLookingFor] FOREIGN KEY([codeCandidates])
REFERENCES [dbo].[WhatImLookingFor] ([CodeCW])
GO
ALTER TABLE [dbo].[Candidates] CHECK CONSTRAINT [FK_Candidates_WhatImLookingFor]
GO
ALTER TABLE [dbo].[Constraints]  WITH CHECK ADD  CONSTRAINT [FK__Constrain__codeC__4316F928] FOREIGN KEY([codeCandidate])
REFERENCES [dbo].[Candidates] ([codeCandidates])
GO
ALTER TABLE [dbo].[Constraints] CHECK CONSTRAINT [FK__Constrain__codeC__4316F928]
GO
ALTER TABLE [dbo].[MosdotToCandidate]  WITH CHECK ADD  CONSTRAINT [FK__MosdotToC__codeC__3A81B327] FOREIGN KEY([codeCandidate])
REFERENCES [dbo].[Candidates] ([codeCandidates])
GO
ALTER TABLE [dbo].[MosdotToCandidate] CHECK CONSTRAINT [FK__MosdotToC__codeC__3A81B327]
GO
ALTER TABLE [dbo].[MosdotToCandidate]  WITH CHECK ADD  CONSTRAINT [FK_MosdotToCandidate_ListOfMosdot] FOREIGN KEY([codeMosad])
REFERENCES [dbo].[ListOfMosdot] ([codeM])
GO
ALTER TABLE [dbo].[MosdotToCandidate] CHECK CONSTRAINT [FK_MosdotToCandidate_ListOfMosdot]
GO
ALTER TABLE [dbo].[ProposalInProcess]  WITH CHECK ADD  CONSTRAINT [FK__ProposalI__codeB__3D5E1FD2] FOREIGN KEY([codeBT])
REFERENCES [dbo].[Candidates] ([codeCandidates])
GO
ALTER TABLE [dbo].[ProposalInProcess] CHECK CONSTRAINT [FK__ProposalI__codeB__3D5E1FD2]
GO
ALTER TABLE [dbo].[ProposalInProcess]  WITH CHECK ADD  CONSTRAINT [FK__ProposalI__codeB__3E52440B] FOREIGN KEY([codeBN])
REFERENCES [dbo].[Candidates] ([codeCandidates])
GO
ALTER TABLE [dbo].[ProposalInProcess] CHECK CONSTRAINT [FK__ProposalI__codeB__3E52440B]
GO
ALTER TABLE [dbo].[ProposalInProcess]  WITH CHECK ADD  CONSTRAINT [FK_ProposalInProcess_StepsOfProposal] FOREIGN KEY([stepMeeting])
REFERENCES [dbo].[StepsOfProposal] ([stepPcode])
GO
ALTER TABLE [dbo].[ProposalInProcess] CHECK CONSTRAINT [FK_ProposalInProcess_StepsOfProposal]
GO
ALTER TABLE [dbo].[StepsOfProposal]  WITH CHECK ADD  CONSTRAINT [FK_StepsOfProposal_TypesOfSteps] FOREIGN KEY([codeStep])
REFERENCES [dbo].[TypesOfSteps] ([codeTypeStep])
GO
ALTER TABLE [dbo].[StepsOfProposal] CHECK CONSTRAINT [FK_StepsOfProposal_TypesOfSteps]
GO
ALTER TABLE [dbo].[WhatImLookingFor]  WITH CHECK ADD  CONSTRAINT [FK_WhatImLookingFor_city] FOREIGN KEY([City])
REFERENCES [dbo].[city] ([CodeCity])
GO
ALTER TABLE [dbo].[WhatImLookingFor] CHECK CONSTRAINT [FK_WhatImLookingFor_city]
GO
ALTER TABLE [dbo].[WhatImLookingFor]  WITH CHECK ADD  CONSTRAINT [FK_WhatImLookingFor_community] FOREIGN KEY([Community])
REFERENCES [dbo].[community] ([codeC])
GO
ALTER TABLE [dbo].[WhatImLookingFor] CHECK CONSTRAINT [FK_WhatImLookingFor_community]
GO
