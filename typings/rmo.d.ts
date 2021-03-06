// Type definitions for Microsoft Visual Studio Services v121.20170815.1933
// Project: https://www.visualstudio.com/integrate/extensions/overview
// Definitions by: Microsoft <vsointegration@microsoft.com>

/// <reference path='vss.d.ts' />
declare module "ReleaseManagement/Core/Constants" {
export module ApprovalOptions {
    var ApprovalMinimumTimeoutInMinutes: number;
    var ApprovalMaximumTimeoutInMinutes: number;
    var ApprovalDefaultTimeoutInMinutes: number;
}
export module ArtifactDefinitionConstants {
    var ProjectId: string;
    var ConnectionId: string;
    var ConnectionName: string;
    var DefinitionId: string;
    var DefaultVersionTypeId: string;
    var DefaultVersionBranchId: string;
    var DefaultVersionTagsId: string;
    var DefaultVersionSpecificId: string;
    var LatestType: string;
    var LatestFromBranchType: string;
    var LatestWithBranchAndTagsType: string;
    var SpecificVersionType: string;
    var SelectDuringReleaseCreationType: string;
    var RepositoryId: string;
    var BranchId: string;
    var MappingsId: string;
    var MappingTypeId: string;
    var ServerPathId: string;
    var LocalPathId: string;
    var ArtifactId: string;
    var ItemPath: string;
    var Version: string;
    var ArtifactSourceVersionUrl: string;
    var ArtifactSourceDefinitionUrl: string;
    var ArtifactItems: string;
    var LabelSources: string;
    var LabelSourcesFormat: string;
    var CheckoutSubmodules: string;
    var GitLfsSupport: string;
    var FetchDepth: string;
    var ReportBuildStatus: string;
    var ArtifactItemContent: string;
    var BranchesId: string;
}
export module ArtifactTypes {
    var BuildArtifactType: string;
    var JenkinsArtifactType: string;
    var GitHubArtifactType: string;
    var NugetArtifactType: string;
    var TfsOnPremArtifactType: string;
    var ExternalTfsBuildArtifactType: string;
    var GitArtifactType: string;
    var TfvcArtifactType: string;
    var ExternalTfsXamlBuildArtifactType: string;
    var PackageManagementArtifactType: string;
}
export module BuildVersionConstants {
    var SourceBranchKey: string;
    var SourceVersionKey: string;
    var RepositoryIdKey: string;
    var RepositoryTypeKey: string;
}
export module DeploymentHealthOptionConstants {
    var AllTargetsInParallel: string;
    var HalfOfTargetsInParallel: string;
    var QuarterOfTargetsInParallel: string;
    var OneTargetAtATime: string;
    var Custom: string;
}
export module FavoriteItemKeys {
    var ReleaseDefinitionId: string;
    var RestEndpointUrl: string;
    var WebEndpointUrl: string;
}
export module FavoriteItemNames {
    var ReleaseDefinitionItemName: string;
}
export module FavoriteItemTypes {
    var ReleaseDefinitionTypeName: string;
}
export module FavoritesScopeNames {
    var ReleaseDefinitionScopeName: string;
}
export module RunOptionsConstants {
    var EnvironmentOwnerEmailNotificationValueAlways: string;
    var EnvironmentOwnerEmailNotificationValueTypeOnlyOnFailure: string;
    var EnvironmentOwnerEmailNotificationValueNever: string;
    var EnvironmentOwnerEmailNotificationTypeDefaultValue: string;
    var ReleaseCreator: string;
    var EnvironmentOwner: string;
}
export module VariableGroupType {
    var Vsts: string;
    var AzureKeyVault: string;
}
export module WellKnownExtendedReleaseVariables {
    var ReleaseArtifacts: string;
    var ReleaseEnvironments: string;
}
export module WellKnownMetrics {
    var SuccessfulDeployments: string;
    var FailedDeployments: string;
    var PartiallySuccessfulDeployments: string;
}
export module WellKnownReleaseVariables {
    var AgentReleaseDirectory: string;
    var EnableAccessTokenVariableName: string;
    var HostType: string;
    var ArtifactsDirectory: string;
    var CollectionId: string;
    var TeamProjectId: string;
    var TeamProject: string;
    var TotalJobsInPhase: string;
    var JobPositionInPhase: string;
    var ParallelExecutionType: string;
    var ReleaseId: string;
    var SkipArtifactsDownload: string;
    var ReleaseName: string;
    var ReleaseDescription: string;
    var ReleaseDisableRobocopy: string;
    var ReleaseDefinitionName: string;
    var ReleaseDefinitionId: string;
    var ReleaseDefinitionEnvironmentId: string;
    var DeploymentId: string;
    var ReleaseUri: string;
    var ReleaseWebUrl: string;
    var ReleaseEnvironmentUri: string;
    var ReleaseEnvironmentId: string;
    var ReleaseEnvironmentName: string;
    var ReleaseDeployPhaseId: string;
    var RequestorId: string;
    var ReleaseRequestedForId: string;
    var ReleaseRequestedForEmail: string;
    var AttemptNumber: string;
    var ReleaseDeploymentRequestedForId: string;
    var ReleaseDeploymentRequestedForEmail: string;
    var ReleaseDeploymentRequestedFor: string;
}
}
declare module "ReleaseManagement/Core/Contracts" {
import TFS_DistributedTask_Common_Contracts = require("TFS/DistributedTaskCommon/Contracts");
import VSS_Common_Contracts = require("VSS/WebApi/Contracts");
import VSS_FormInput_Contracts = require("VSS/Common/Contracts/FormInput");
export interface AgentArtifactDefinition {
    alias: string;
    artifactType: AgentArtifactType;
    details: string;
    name: string;
    version: string;
}
export enum AgentArtifactType {
    XamlBuild = 0,
    Build = 1,
    Jenkins = 2,
    FileShare = 3,
    Nuget = 4,
    TfsOnPrem = 5,
    GitHub = 6,
    TFGit = 7,
    ExternalTfsBuild = 8,
    Custom = 9,
    Tfvc = 10,
}
export interface AgentBasedDeployPhase extends DeployPhase {
    deploymentInput: AgentDeploymentInput;
}
export interface AgentDeploymentInput extends DeploymentInput {
    imageId: number;
    parallelExecution: ExecutionInput;
}
export interface ApprovalOptions {
    autoTriggeredAndPreviousEnvironmentApprovedCanBeSkipped: boolean;
    enforceIdentityRevalidation: boolean;
    releaseCreatorCanBeApprover: boolean;
    requiredApproverCount: number;
    timeoutInMinutes: number;
}
export enum ApprovalStatus {
    Undefined = 0,
    Pending = 1,
    Approved = 2,
    Rejected = 4,
    Reassigned = 6,
    Canceled = 7,
    Skipped = 8,
}
export enum ApprovalType {
    Undefined = 0,
    PreDeploy = 1,
    PostDeploy = 2,
    All = 3,
}
export interface Artifact {
    /**
     * Gets or sets alias.
     */
    alias: string;
    /**
     * Gets or sets definition reference. e.g. {"project":{"id":"fed755ea-49c5-4399-acea-fd5b5aa90a6c","name":"myProject"},"definition":{"id":"1","name":"mybuildDefinition"},"connection":{"id":"1","name":"myConnection"}}
     */
    definitionReference: {
        [key: string]: ArtifactSourceReference;
    };
    /**
     * Gets or sets as artifact is primary or not.
     */
    isPrimary: boolean;
    sourceId: string;
    /**
     * Gets or sets type. It can have value as 'Build', 'Jenkins', 'GitHub', 'Nuget', 'Team Build (external)', 'ExternalTFSBuild', 'Git', 'TFVC', 'ExternalTfsXamlBuild'.
     */
    type: string;
}
export interface ArtifactContributionDefinition {
    artifactType: string;
    artifactTypeStreamMapping: {
        [key: string]: string;
    };
    browsableArtifactTypeMapping: {
        [key: string]: string;
    };
    dataSourceBindings: DataSourceBinding[];
    displayName: string;
    downloadTaskId: string;
    endpointTypeId: string;
    inputDescriptors: VSS_FormInput_Contracts.InputDescriptor[];
    name: string;
    uniqueSourceIdentifier: string;
}
export interface ArtifactFilter {
    sourceBranch: string;
    tags: string[];
}
export interface ArtifactInstanceData {
    accountName: string;
    authenticationToken: string;
    tfsUrl: string;
    version: string;
}
export interface ArtifactMetadata {
    /**
     * Sets alias of artifact.
     */
    alias: string;
    /**
     * Sets instance reference of artifact. e.g. for build artifact it is build number.
     */
    instanceReference: BuildVersion;
}
export interface ArtifactProvider {
    id: number;
    name: string;
    sourceUri: string;
    version: string;
}
export interface ArtifactSourceId {
    artifactTypeId: string;
    sourceIdInputs: SourceIdInput[];
}
export interface ArtifactSourceIdsQueryResult {
    artifactSourceIds: ArtifactSourceId[];
}
export interface ArtifactSourceReference {
    id: string;
    name: string;
}
export interface ArtifactSourceTrigger extends ReleaseTriggerBase {
    /**
     * Artifact source alias for Artifact Source trigger type
     */
    artifactAlias: string;
    triggerConditions: ArtifactFilter[];
}
export interface ArtifactTypeDefinition {
    displayName: string;
    inputDescriptors: VSS_FormInput_Contracts.InputDescriptor[];
    name: string;
    uniqueSourceIdentifier: string;
}
export interface ArtifactVersion {
    alias: string;
    defaultVersion: BuildVersion;
    errorMessage: string;
    sourceId: string;
    versions: BuildVersion[];
}
export interface ArtifactVersionQueryResult {
    artifactVersions: ArtifactVersion[];
}
export enum AuditAction {
    Add = 1,
    Update = 2,
    Delete = 3,
}
export enum AuthorizationHeaderFor {
    RevalidateApproverIdentity = 0,
    OnBehalfOf = 1,
}
export interface AutoTriggerIssue {
    issue: Issue;
    issueSource: IssueSource;
    project: ProjectReference;
    releaseDefinitionReference: ReleaseDefinitionShallowReference;
    releaseTriggerType: ReleaseTriggerType;
}
export interface AzureKeyVaultVariableGroupProviderData extends VariableGroupProviderData {
    lastRefreshedOn: Date;
    serviceEndpointId: string;
    vault: string;
}
export interface AzureKeyVaultVariableValue extends VariableValue {
    contentType: string;
    enabled: boolean;
    expires: Date;
}
export interface BaseDeploymentInput {
    condition: string;
    /**
     * Gets or sets the job cancel timeout in minutes for deployment which are cancelled by user for this release environment
     */
    jobCancelTimeoutInMinutes: number;
    overrideInputs: {
        [key: string]: string;
    };
    shareOutputVariables: boolean;
    /**
     * Gets or sets the job execution timeout in minutes for deployment which are queued against this release environment
     */
    timeoutInMinutes: number;
}
export interface BuildVersion {
    id: string;
    name: string;
    sourceBranch: string;
    sourceRepositoryId: string;
    sourceRepositoryType: string;
    sourceVersion: string;
}
/**
 * Represents a change associated with a build.
 */
export interface Change {
    /**
     * The author of the change.
     */
    author: VSS_Common_Contracts.IdentityRef;
    /**
     * The type of change. "commit", "changeset", etc.
     */
    changeType: string;
    /**
     * The location of a user-friendly representation of the resource.
     */
    displayUri: string;
    /**
     * Something that identifies the change. For a commit, this would be the SHA1. For a TFVC changeset, this would be the changeset id.
     */
    id: string;
    /**
     * The location of the full representation of the resource.
     */
    location: string;
    /**
     * A description of the change. This might be a commit message or changeset description.
     */
    message: string;
    /**
     * A timestamp for the change.
     */
    timestamp: Date;
}
export interface Condition {
    conditionType: ConditionType;
    name: string;
    value: string;
}
export enum ConditionType {
    Undefined = 0,
    Event = 1,
    EnvironmentState = 2,
    Artifact = 4,
}
export interface ConfigurationVariableValue {
    /**
     * Gets or sets as variable is secret or not.
     */
    isSecret: boolean;
    /**
     * Gets or sets value of the configuration variable.
     */
    value: string;
}
export interface Consumer {
    consumerId: number;
    consumerName: string;
}
export interface ContinuousDeploymentTriggerIssue extends AutoTriggerIssue {
    artifactType: string;
    artifactVersionId: string;
    sourceId: string;
}
export interface ControlOptions {
    alwaysRun: boolean;
    continueOnError: boolean;
    enabled: boolean;
}
export interface DataSourceBinding {
    dataSourceName: string;
    endpointId: string;
    endpointUrl: string;
    parameters: {
        [key: string]: string;
    };
    resultSelector: string;
    resultTemplate: string;
    target: string;
}
export interface DefinitionEnvironmentReference {
    definitionEnvironmentId: number;
    definitionEnvironmentName: string;
    releaseDefinitionId: number;
    releaseDefinitionName: string;
}
export interface Deployment {
    _links: any;
    attempt: number;
    conditions: Condition[];
    definitionEnvironmentId: number;
    deploymentStatus: DeploymentStatus;
    id: number;
    lastModifiedBy: VSS_Common_Contracts.IdentityRef;
    lastModifiedOn: Date;
    operationStatus: DeploymentOperationStatus;
    postDeployApprovals: ReleaseApproval[];
    preDeployApprovals: ReleaseApproval[];
    queuedOn: Date;
    reason: DeploymentReason;
    release: ReleaseReference;
    releaseDefinition: ReleaseDefinitionShallowReference;
    releaseEnvironment: ReleaseEnvironmentShallowReference;
    requestedBy: VSS_Common_Contracts.IdentityRef;
    requestedFor: VSS_Common_Contracts.IdentityRef;
    scheduledDeploymentTime: Date;
    startedOn: Date;
}
export interface DeploymentApprovalCompletedEvent {
    approval: ReleaseApproval;
    project: ProjectReference;
    release: Release;
}
export interface DeploymentApprovalPendingEvent {
    approval: ReleaseApproval;
    approvalOptions: ApprovalOptions;
    completedApprovals: ReleaseApproval[];
    data: {
        [key: string]: any;
    };
    deployment: Deployment;
    isMultipleRankApproval: boolean;
    pendingApprovals: ReleaseApproval[];
    project: ProjectReference;
    release: Release;
}
export interface DeploymentAttempt {
    attempt: number;
    deploymentId: number;
    /**
     * Error log to show any unexpected error that occurred during executing deploy step
     */
    errorLog: string;
    /**
     * The time at which the deployment started, and null if it has not been deployed yet
     */
    hasStarted: boolean;
    id: number;
    job: ReleaseTask;
    lastModifiedBy: VSS_Common_Contracts.IdentityRef;
    lastModifiedOn: Date;
    operationStatus: DeploymentOperationStatus;
    queuedOn: Date;
    reason: DeploymentReason;
    releaseDeployPhases: ReleaseDeployPhase[];
    requestedBy: VSS_Common_Contracts.IdentityRef;
    requestedFor: VSS_Common_Contracts.IdentityRef;
    runPlanId: string;
    status: DeploymentStatus;
    tasks: ReleaseTask[];
}
export interface DeploymentAuthorizationInfo {
    authorizationHeaderFor: AuthorizationHeaderFor;
    resources: string[];
    tenantId: string;
    vstsAccessTokenKey: string;
}
export enum DeploymentAuthorizationOwner {
    Automatic = 0,
    DeploymentSubmitter = 1,
    FirstPreDeploymentApprover = 2,
}
export interface DeploymentCompletedEvent {
    comment: string;
    data: {
        [key: string]: any;
    };
    deployment: Deployment;
    environment: ReleaseEnvironment;
    project: ProjectReference;
}
export enum DeploymentExpands {
    All = 0,
    DeploymentOnly = 1,
    Approvals = 2,
    Artifacts = 4,
}
export interface DeploymentInput extends BaseDeploymentInput {
    demands: any[];
    enableAccessToken: boolean;
    queueId: number;
    skipArtifactsDownload: boolean;
}
export interface DeploymentJob {
    job: ReleaseTask;
    tasks: ReleaseTask[];
}
export interface DeploymentManualInterventionPendingEvent {
    deployment: Deployment;
    emailRecipients: string[];
    environmentOwner: VSS_Common_Contracts.IdentityRef;
    manualIntervention: ManualIntervention;
    project: ProjectReference;
    release: Release;
}
export enum DeploymentOperationStatus {
    Undefined = 0,
    Queued = 1,
    Scheduled = 2,
    Pending = 4,
    Approved = 8,
    Rejected = 16,
    Deferred = 32,
    QueuedForAgent = 64,
    PhaseInProgress = 128,
    PhaseSucceeded = 256,
    PhasePartiallySucceeded = 512,
    PhaseFailed = 1024,
    Canceled = 2048,
    PhaseCanceled = 4096,
    ManualInterventionPending = 8192,
    QueuedForPipeline = 16384,
    All = 28671,
}
export interface DeploymentQueryParameters {
    artifactSourceId: string;
    artifactTypeId: string;
    artifactVersions: string[];
    deploymentStatus: DeploymentStatus;
    environments: DefinitionEnvironmentReference[];
    expands: DeploymentExpands;
    isDeleted: boolean;
    latestDeploymentsOnly: boolean;
    maxDeploymentsPerEnvironment: number;
    maxModifiedTime: Date;
    minModifiedTime: Date;
    operationStatus: DeploymentOperationStatus;
    queryOrder: ReleaseQueryOrder;
}
export enum DeploymentReason {
    None = 0,
    Manual = 1,
    Automated = 2,
    Scheduled = 4,
}
export interface DeploymentStartedEvent {
    environment: ReleaseEnvironment;
    project: ProjectReference;
    release: Release;
}
export enum DeploymentStatus {
    Undefined = 0,
    NotDeployed = 1,
    InProgress = 2,
    Succeeded = 4,
    PartiallySucceeded = 8,
    Failed = 16,
    All = 31,
}
export interface DeployPhase {
    name: string;
    phaseType: DeployPhaseTypes;
    rank: number;
    workflowTasks: WorkflowTask[];
}
export enum DeployPhaseStatus {
    Undefined = 0,
    NotStarted = 1,
    InProgress = 2,
    PartiallySucceeded = 4,
    Succeeded = 8,
    Failed = 16,
    Canceled = 32,
    Skipped = 64,
}
export enum DeployPhaseTypes {
    Undefined = 0,
    AgentBasedDeployment = 1,
    RunOnServer = 2,
    MachineGroupBasedDeployment = 4,
}
export interface EmailRecipients {
    emailAddresses: string[];
    tfsIds: string[];
}
/**
 * Defines policy on environment queuing at Release Management side queue. We will send to Environment Runner [creating pre-deploy and other steps] only when the policies mentioned are satisfied.
 */
export interface EnvironmentExecutionPolicy {
    /**
     * This policy decides, how many environments would be with Environment Runner.
     */
    concurrencyCount: number;
    /**
     * Queue depth in the EnvironmentQueue table, this table keeps the environment entries till Environment Runner is free [as per it's policy] to take another environment for running.
     */
    queueDepthCount: number;
}
export interface EnvironmentOptions {
    emailNotificationType: string;
    emailRecipients: string;
    enableAccessToken: boolean;
    publishDeploymentStatus: boolean;
    skipArtifactsDownload: boolean;
    timeoutInMinutes: number;
}
export interface EnvironmentRetentionPolicy {
    daysToKeep: number;
    releasesToKeep: number;
    retainBuild: boolean;
}
export enum EnvironmentStatus {
    Undefined = 0,
    NotStarted = 1,
    InProgress = 2,
    Succeeded = 4,
    Canceled = 8,
    Rejected = 16,
    Queued = 32,
    Scheduled = 64,
    PartiallySucceeded = 128,
}
export interface ExecutionInput {
    parallelExecutionType: ParallelExecutionTypes;
}
/**
 * Class to represent favorite entry
 */
export interface FavoriteItem {
    /**
     * Application specific data for the entry
     */
    data: string;
    /**
     * Unique Id of the the entry
     */
    id: string;
    /**
     * Display text for favorite entry
     */
    name: string;
    /**
     * Application specific favorite entry type. Empty or Null represents that Favorite item is a Folder
     */
    type: string;
}
export interface Folder {
    createdBy: VSS_Common_Contracts.IdentityRef;
    createdOn: Date;
    description: string;
    lastChangedBy: VSS_Common_Contracts.IdentityRef;
    lastChangedDate: Date;
    path: string;
}
export enum FolderPathQueryOrder {
    /**
     * No order
     */
    None = 0,
    /**
     * Order by folder name and path ascending.
     */
    Ascending = 1,
    /**
     * Order by folder name and path descending.
     */
    Descending = 2,
}
export interface Issue {
    issueType: string;
    message: string;
}
export enum IssueSource {
    None = 0,
    User = 1,
    System = 2,
}
export interface MachineGroupBasedDeployPhase extends DeployPhase {
    deploymentInput: MachineGroupDeploymentInput;
}
export interface MachineGroupDeploymentInput extends DeploymentInput {
    deploymentHealthOption: string;
    healthPercent: number;
    tags: string[];
}
export interface MailMessage {
    body: string;
    cC: EmailRecipients;
    inReplyTo: string;
    messageId: string;
    replyBy: Date;
    replyTo: EmailRecipients;
    sections: MailSectionType[];
    senderType: SenderType;
    subject: string;
    to: EmailRecipients;
}
export enum MailSectionType {
    Details = 0,
    Environments = 1,
    Issues = 2,
    TestResults = 3,
    WorkItems = 4,
    ReleaseInfo = 5,
}
export interface ManualIntervention {
    approver: VSS_Common_Contracts.IdentityRef;
    comments: string;
    createdOn: Date;
    id: number;
    instructions: string;
    modifiedOn: Date;
    name: string;
    release: ReleaseShallowReference;
    releaseDefinition: ReleaseDefinitionShallowReference;
    releaseEnvironment: ReleaseEnvironmentShallowReference;
    status: ManualInterventionStatus;
    taskInstanceId: string;
    url: string;
}
export enum ManualInterventionStatus {
    Unknown = 0,
    Pending = 1,
    Rejected = 2,
    Approved = 4,
    Canceled = 8,
}
export interface ManualInterventionUpdateMetadata {
    comment: string;
    status: ManualInterventionStatus;
}
export interface MappingDetails {
    mappings: {
        [key: string]: VSS_FormInput_Contracts.InputValue;
    };
}
export interface Metric {
    name: string;
    value: number;
}
export interface MultiConfigInput extends ParallelExecutionInputBase {
    multipliers: string;
}
export interface MultiMachineInput extends ParallelExecutionInputBase {
}
export interface ParallelExecutionInputBase extends ExecutionInput {
    continueOnError: boolean;
    maxNumberOfAgents: number;
}
export enum ParallelExecutionTypes {
    None = 0,
    MultiConfiguration = 1,
    MultiMachine = 2,
}
export interface ProjectReference {
    /**
     * Gets the unique identifier of this field.
     */
    id: string;
    /**
     * Gets name of project.
     */
    name: string;
}
export interface PropertySelector {
    properties: string[];
    selectorType: PropertySelectorType;
}
export enum PropertySelectorType {
    Inclusion = 0,
    Exclusion = 1,
}
export interface QueuedReleaseData {
    projectId: string;
    queuePosition: number;
    releaseId: number;
}
export interface RealtimeReleaseEvent {
    projectId: string;
    releaseId: number;
}
export interface Release {
    /**
     * Gets links to access the release.
     */
    _links: any;
    /**
     * Gets or sets the list of artifacts.
     */
    artifacts: Artifact[];
    /**
     * Gets or sets comment.
     */
    comment: string;
    /**
     * Gets or sets the identity who created.
     */
    createdBy: VSS_Common_Contracts.IdentityRef;
    /**
     * Gets date on which it got created.
     */
    createdOn: Date;
    /**
     * Gets revision number of definition snapshot.
     */
    definitionSnapshotRevision: number;
    /**
     * Gets or sets description of release.
     */
    description: string;
    /**
     * Gets or sets the list of environments.
     */
    environments: ReleaseEnvironment[];
    /**
     * Gets the unique identifier of this field.
     */
    id: number;
    /**
     * Whether to exclude the release from retention policies.
     */
    keepForever: boolean;
    /**
     * Gets logs container url.
     */
    logsContainerUrl: string;
    /**
     * Gets or sets the identity who modified.
     */
    modifiedBy: VSS_Common_Contracts.IdentityRef;
    /**
     * Gets date on which it got modified.
     */
    modifiedOn: Date;
    /**
     * Gets or sets name.
     */
    name: string;
    /**
     * Gets or sets pool name.
     */
    poolName: string;
    /**
     * Gets or sets project reference.
     */
    projectReference: ProjectReference;
    properties: any;
    /**
     * Gets reason of release.
     */
    reason: ReleaseReason;
    /**
     * Gets releaseDefinitionReference which specifies the reference of the release definition to which this release is associated.
     */
    releaseDefinition: ReleaseDefinitionShallowReference;
    /**
     * Gets release name format.
     */
    releaseNameFormat: string;
    /**
     * Gets or sets status.
     */
    status: ReleaseStatus;
    /**
     * Gets or sets list of tags.
     */
    tags: string[];
    /**
     * Gets url to access the release.
     */
    url: string;
    /**
     * Gets or sets the list of variable groups.
     */
    variableGroups: VariableGroup[];
    /**
     * Gets or sets the dictionary of variables.
     */
    variables: {
        [key: string]: ConfigurationVariableValue;
    };
}
export interface ReleaseAbandonedEvent {
    project: ProjectReference;
    release: Release;
}
export interface ReleaseApproval {
    /**
     * Gets or sets the type of approval.
     */
    approvalType: ApprovalType;
    /**
     * Gets the identity who approved.
     */
    approvedBy: VSS_Common_Contracts.IdentityRef;
    /**
     * Gets or sets the identity who should approve.
     */
    approver: VSS_Common_Contracts.IdentityRef;
    /**
     * Gets or sets attempt which specifies as which deployment attempt it belongs.
     */
    attempt: number;
    /**
     * Gets or sets comments for approval.
     */
    comments: string;
    /**
     * Gets date on which it got created.
     */
    createdOn: Date;
    /**
     * Gets history which specifies all approvals associated with this approval.
     */
    history: ReleaseApprovalHistory[];
    /**
     * Gets the unique identifier of this field.
     */
    id: number;
    /**
     * Gets or sets as approval is automated or not.
     */
    isAutomated: boolean;
    isNotificationOn: boolean;
    /**
     * Gets date on which it got modified.
     */
    modifiedOn: Date;
    /**
     * Gets or sets rank which specifies the order of the approval. e.g. Same rank denotes parallel approval.
     */
    rank: number;
    /**
     * Gets releaseReference which specifies the reference of the release to which this approval is associated.
     */
    release: ReleaseShallowReference;
    /**
     * Gets releaseDefinitionReference which specifies the reference of the release definition to which this approval is associated.
     */
    releaseDefinition: ReleaseDefinitionShallowReference;
    /**
     * Gets releaseEnvironmentReference which specifies the reference of the release environment to which this approval is associated.
     */
    releaseEnvironment: ReleaseEnvironmentShallowReference;
    /**
     * Gets the revision number.
     */
    revision: number;
    /**
     * Gets or sets the status of the approval.
     */
    status: ApprovalStatus;
    trialNumber: number;
    /**
     * Gets url to access the approval.
     */
    url: string;
}
export interface ReleaseApprovalHistory {
    approver: VSS_Common_Contracts.IdentityRef;
    changedBy: VSS_Common_Contracts.IdentityRef;
    comments: string;
    createdOn: Date;
    modifiedOn: Date;
    revision: number;
}
export interface ReleaseApprovalPendingEvent {
    approval: ReleaseApproval;
    approvalOptions: ApprovalOptions;
    completedApprovals: ReleaseApproval[];
    definitionName: string;
    deployment: Deployment;
    environmentId: number;
    environmentName: string;
    environments: ReleaseEnvironment[];
    isMultipleRankApproval: boolean;
    pendingApprovals: ReleaseApproval[];
    releaseCreator: string;
    releaseName: string;
    title: string;
    webAccessUri: string;
}
export interface ReleaseArtifact {
    artifactProvider: ArtifactProvider;
    artifactType: string;
    definitionData: string;
    definitionId: number;
    description: string;
    id: number;
    name: string;
    releaseId: number;
}
export interface ReleaseCondition extends Condition {
    result: boolean;
}
export interface ReleaseCreatedEvent {
    project: ProjectReference;
    release: Release;
}
export interface ReleaseDefinition {
    /**
     * Gets links to access the release definition.
     */
    _links: any;
    /**
     * Gets or sets the list of artifacts.
     */
    artifacts: Artifact[];
    /**
     * Gets or sets comment.
     */
    comment: string;
    /**
     * Gets or sets the identity who created.
     */
    createdBy: VSS_Common_Contracts.IdentityRef;
    /**
     * Gets date on which it got created.
     */
    createdOn: Date;
    /**
     * Gets or sets the description.
     */
    description: string;
    /**
     * Gets or sets the list of environments.
     */
    environments: ReleaseDefinitionEnvironment[];
    /**
     * Gets the unique identifier of this field.
     */
    id: number;
    /**
     * Gets the reference of last release.
     */
    lastRelease: ReleaseReference;
    /**
     * Gets or sets the identity who modified.
     */
    modifiedBy: VSS_Common_Contracts.IdentityRef;
    /**
     * Gets date on which it got modified.
     */
    modifiedOn: Date;
    /**
     * Gets or sets the name.
     */
    name: string;
    /**
     * Gets or sets the path.
     */
    path: string;
    /**
     * Gets or sets properties.
     */
    properties: any;
    /**
     * Gets or sets the release name format.
     */
    releaseNameFormat: string;
    retentionPolicy: RetentionPolicy;
    /**
     * Gets the revision number.
     */
    revision: number;
    /**
     * Gets or sets source of release definition.
     */
    source: ReleaseDefinitionSource;
    /**
     * Gets or sets list of tags.
     */
    tags: string[];
    /**
     * Gets or sets the list of triggers.
     */
    triggers: ReleaseTriggerBase[];
    /**
     * Gets url to access the release definition.
     */
    url: string;
    /**
     * Gets or sets the list of variable groups.
     */
    variableGroups: number[];
    /**
     * Gets or sets the dictionary of variables.
     */
    variables: {
        [key: string]: ConfigurationVariableValue;
    };
}
export interface ReleaseDefinitionApprovals {
    approvalOptions: ApprovalOptions;
    approvals: ReleaseDefinitionApprovalStep[];
}
export interface ReleaseDefinitionApprovalStep extends ReleaseDefinitionEnvironmentStep {
    approver: VSS_Common_Contracts.IdentityRef;
    isAutomated: boolean;
    isNotificationOn: boolean;
    rank: number;
}
export interface ReleaseDefinitionDeployStep extends ReleaseDefinitionEnvironmentStep {
    /**
     * The list of steps for this definition.
     */
    tasks: WorkflowTask[];
}
export interface ReleaseDefinitionEnvironment {
    conditions: Condition[];
    demands: any[];
    deployPhases: DeployPhase[];
    deployStep: ReleaseDefinitionDeployStep;
    environmentOptions: EnvironmentOptions;
    executionPolicy: EnvironmentExecutionPolicy;
    id: number;
    name: string;
    owner: VSS_Common_Contracts.IdentityRef;
    postDeployApprovals: ReleaseDefinitionApprovals;
    preDeployApprovals: ReleaseDefinitionApprovals;
    processParameters: TFS_DistributedTask_Common_Contracts.ProcessParameters;
    properties: any;
    queueId: number;
    rank: number;
    retentionPolicy: EnvironmentRetentionPolicy;
    runOptions: {
        [key: string]: string;
    };
    schedules: ReleaseSchedule[];
    variables: {
        [key: string]: ConfigurationVariableValue;
    };
}
export interface ReleaseDefinitionEnvironmentStep {
    id: number;
}
export interface ReleaseDefinitionEnvironmentSummary {
    id: number;
    lastReleases: ReleaseShallowReference[];
    name: string;
}
export interface ReleaseDefinitionEnvironmentTemplate {
    canDelete: boolean;
    category: string;
    description: string;
    environment: ReleaseDefinitionEnvironment;
    iconTaskId: string;
    iconUri: string;
    id: string;
    name: string;
}
export enum ReleaseDefinitionExpands {
    None = 0,
    Environments = 2,
    Artifacts = 4,
    Triggers = 8,
    Variables = 16,
    Tags = 32,
    LastRelease = 64,
}
export enum ReleaseDefinitionQueryOrder {
    IdAscending = 0,
    IdDescending = 1,
    NameAscending = 2,
    NameDescending = 3,
}
export interface ReleaseDefinitionRevision {
    /**
     * Gets api-version for revision object.
     */
    apiVersion: string;
    /**
     * Gets the identity who did change.
     */
    changedBy: VSS_Common_Contracts.IdentityRef;
    /**
     * Gets date on which it got changed.
     */
    changedDate: Date;
    /**
     * Gets type of change.
     */
    changeType: AuditAction;
    /**
     * Gets comments for revision.
     */
    comment: string;
    /**
     * Get id of the definition.
     */
    definitionId: number;
    /**
     * Gets definition url.
     */
    definitionUrl: string;
    /**
     * Get revision number of the definition.
     */
    revision: number;
}
export interface ReleaseDefinitionShallowReference {
    /**
     * Gets the links to related resources, APIs, and views for the release definition.
     */
    _links: any;
    /**
     * Gets the unique identifier of release definition.
     */
    id: number;
    /**
     * Gets or sets the name of the release definition.
     */
    name: string;
    /**
     * Gets the REST API url to access the release definition.
     */
    url: string;
}
export enum ReleaseDefinitionSource {
    Undefined = 0,
    RestApi = 1,
    UserInterface = 2,
    Ibiza = 4,
    PortalExtensionApi = 8,
}
export interface ReleaseDefinitionSummary {
    environments: ReleaseDefinitionEnvironmentSummary[];
    releaseDefinition: ReleaseDefinitionShallowReference;
    releases: Release[];
}
export interface ReleaseDeployPhase {
    deploymentJobs: DeploymentJob[];
    errorLog: string;
    id: number;
    manualInterventions: ManualIntervention[];
    phaseType: DeployPhaseTypes;
    rank: number;
    runPlanId: string;
    status: DeployPhaseStatus;
}
export interface ReleaseEnvironment {
    /**
     * Gets list of conditions.
     */
    conditions: ReleaseCondition[];
    /**
     * Gets date on which it got created.
     */
    createdOn: Date;
    /**
     * Gets definition environment id.
     */
    definitionEnvironmentId: number;
    /**
     * Gets demands.
     */
    demands: any[];
    /**
     * Gets list of deploy phases snapshot.
     */
    deployPhasesSnapshot: DeployPhase[];
    /**
     * Gets deploy steps.
     */
    deploySteps: DeploymentAttempt[];
    /**
     * Gets environment options.
     */
    environmentOptions: EnvironmentOptions;
    /**
     * Gets the unique identifier of this field.
     */
    id: number;
    /**
     * Gets date on which it got modified.
     */
    modifiedOn: Date;
    /**
     * Gets name.
     */
    name: string;
    /**
     * Gets next scheduled UTC time.
     */
    nextScheduledUtcTime: Date;
    /**
     * Gets the identity who is owner for release environment.
     */
    owner: VSS_Common_Contracts.IdentityRef;
    /**
     * Gets list of post deploy approvals snapshot.
     */
    postApprovalsSnapshot: ReleaseDefinitionApprovals;
    /**
     * Gets list of post deploy approvals.
     */
    postDeployApprovals: ReleaseApproval[];
    /**
     * Gets list of pre deploy approvals snapshot.
     */
    preApprovalsSnapshot: ReleaseDefinitionApprovals;
    /**
     * Gets list of pre deploy approvals.
     */
    preDeployApprovals: ReleaseApproval[];
    /**
     * Gets process parameters.
     */
    processParameters: TFS_DistributedTask_Common_Contracts.ProcessParameters;
    /**
     * Gets queue id.
     */
    queueId: number;
    /**
     * Gets rank.
     */
    rank: number;
    /**
     * Gets release reference which specifies the reference of the release to which this release environment is associated.
     */
    release: ReleaseShallowReference;
    /**
     * Gets the identity who created release.
     */
    releaseCreatedBy: VSS_Common_Contracts.IdentityRef;
    /**
     * Gets releaseDefinitionReference which specifies the reference of the release definition to which this release environment is associated.
     */
    releaseDefinition: ReleaseDefinitionShallowReference;
    /**
     * Gets release description.
     */
    releaseDescription: string;
    /**
     * Gets release id.
     */
    releaseId: number;
    /**
     * Gets schedule deployment time of release environment.
     */
    scheduledDeploymentTime: Date;
    /**
     * Gets list of schedules.
     */
    schedules: ReleaseSchedule[];
    /**
     * Gets environment status.
     */
    status: EnvironmentStatus;
    /**
     * Gets time to deploy.
     */
    timeToDeploy: number;
    /**
     * Gets trigger reason.
     */
    triggerReason: string;
    /**
     * Gets the dictionary of variables.
     */
    variables: {
        [key: string]: ConfigurationVariableValue;
    };
    /**
     * Gets list of workflow tasks.
     */
    workflowTasks: WorkflowTask[];
}
export interface ReleaseEnvironmentCompletedEvent {
    createdByName: string;
    definitionId: number;
    definitionName: string;
    environment: ReleaseEnvironment;
    environmentId: number;
    projectName: string;
    reason: DeploymentReason;
    releaseCreatedBy: VSS_Common_Contracts.IdentityRef;
    releaseLogsUri: string;
    releaseName: string;
    status: string;
    title: string;
    webAccessUri: string;
}
export interface ReleaseEnvironmentShallowReference {
    /**
     * Gets the links to related resources, APIs, and views for the release environment.
     */
    _links: any;
    /**
     * Gets the unique identifier of release environment.
     */
    id: number;
    /**
     * Gets or sets the name of the release environment.
     */
    name: string;
    /**
     * Gets the REST API url to access the release environment.
     */
    url: string;
}
export interface ReleaseEnvironmentUpdateMetadata {
    /**
     * Gets or sets comment.
     */
    comment: string;
    /**
     * Gets or sets scheduled deployment time.
     */
    scheduledDeploymentTime: Date;
    /**
     * Gets or sets status of environment.
     */
    status: EnvironmentStatus;
}
export enum ReleaseExpands {
    None = 0,
    Environments = 2,
    Artifacts = 4,
    Approvals = 8,
    ManualInterventions = 16,
    Variables = 32,
    Tags = 64,
}
export enum ReleaseQueryOrder {
    Descending = 0,
    Ascending = 1,
}
export enum ReleaseReason {
    None = 0,
    Manual = 1,
    ContinuousIntegration = 2,
    Schedule = 3,
    IndividualCI = 4,
    BatchedCI = 5,
}
export interface ReleaseReference {
    /**
     * Gets links to access the release.
     */
    _links: any;
    /**
     * Gets list of artifacts.
     */
    artifacts: Artifact[];
    /**
     * Gets the identity who created.
     */
    createdBy: VSS_Common_Contracts.IdentityRef;
    /**
     * Gets date on which it got created.
     */
    createdOn: Date;
    /**
     * Gets description.
     */
    description: string;
    /**
     * Gets the unique identifier of this field.
     */
    id: number;
    /**
     * Gets the identity who modified.
     */
    modifiedBy: VSS_Common_Contracts.IdentityRef;
    /**
     * Gets name of release.
     */
    name: string;
    /**
     * Gets reason for release.
     */
    reason: ReleaseReason;
    /**
     * Gets release definition shallow reference.
     */
    releaseDefinition: ReleaseDefinitionShallowReference;
    /**
     * Gets url to access the release.
     */
    url: string;
    /**
     * Gets web access url.
     */
    webAccessUri: string;
}
export interface ReleaseRevision {
    changedBy: VSS_Common_Contracts.IdentityRef;
    changedDate: Date;
    changeDetails: string;
    changeType: string;
    comment: string;
    definitionSnapshotRevision: number;
    releaseId: number;
}
export interface ReleaseSchedule {
    /**
     * Days of the week to release
     */
    daysToRelease: ScheduleDays;
    /**
     * Team Foundation Job Definition Job Id
     */
    jobId: string;
    /**
     * Local time zone hour to start
     */
    startHours: number;
    /**
     * Local time zone minute to start
     */
    startMinutes: number;
    /**
     * Time zone Id of release schedule, such as 'UTC'
     */
    timeZoneId: string;
}
export interface ReleaseSettings {
    retentionSettings: RetentionSettings;
}
export interface ReleaseShallowReference {
    /**
     * Gets the links to related resources, APIs, and views for the release.
     */
    _links: any;
    /**
     * Gets the unique identifier of release.
     */
    id: number;
    /**
     * Gets or sets the name of the release.
     */
    name: string;
    /**
     * Gets the REST API url to access the release.
     */
    url: string;
}
export interface ReleaseStartMetadata {
    /**
     * Sets list of artifact to create a release.
     */
    artifacts: ArtifactMetadata[];
    /**
     * Sets definition Id to create a release.
     */
    definitionId: number;
    /**
     * Sets description to create a release.
     */
    description: string;
    /**
     * Sets 'true' to create release in draft mode, 'false' otherwise.
     */
    isDraft: boolean;
    /**
     * Sets list of environments to manual as condition.
     */
    manualEnvironments: string[];
    properties: any;
    /**
     * Sets reason to create a release.
     */
    reason: ReleaseReason;
}
export enum ReleaseStatus {
    Undefined = 0,
    Draft = 1,
    Active = 2,
    Abandoned = 4,
}
export interface ReleaseTask {
    agentName: string;
    dateEnded: Date;
    dateStarted: Date;
    finishTime: Date;
    id: number;
    issues: Issue[];
    lineCount: number;
    logUrl: string;
    name: string;
    percentComplete: number;
    rank: number;
    startTime: Date;
    status: TaskStatus;
    task: WorkflowTaskReference;
    timelineRecordId: string;
}
export interface ReleaseTaskLogUpdatedEvent extends RealtimeReleaseEvent {
    environmentId: number;
    lines: string[];
    timelineRecordId: string;
}
export interface ReleaseTasksUpdatedEvent extends RealtimeReleaseEvent {
    environmentId: number;
    job: ReleaseTask;
    releaseDeployPhaseId: number;
    releaseStepId: number;
    tasks: ReleaseTask[];
}
export interface ReleaseTriggerBase {
    triggerType: ReleaseTriggerType;
}
export enum ReleaseTriggerType {
    Undefined = 0,
    ArtifactSource = 1,
    Schedule = 2,
    SourceRepo = 3,
}
export interface ReleaseUpdatedEvent extends RealtimeReleaseEvent {
    release: Release;
}
export interface ReleaseUpdateMetadata {
    /**
     * Sets comment for release.
     */
    comment: string;
    /**
     * Set 'true' to exclude the release from retention policies.
     */
    keepForever: boolean;
    /**
     * Sets list of manual environments.
     */
    manualEnvironments: string[];
    /**
     * Sets status of the release.
     */
    status: ReleaseStatus;
}
export interface ReleaseWorkItemRef {
    id: string;
    url: string;
}
export interface RetentionPolicy {
    daysToKeep: number;
}
export interface RetentionSettings {
    daysToKeepDeletedReleases: number;
    defaultEnvironmentRetentionPolicy: EnvironmentRetentionPolicy;
    maximumEnvironmentRetentionPolicy: EnvironmentRetentionPolicy;
}
export interface RunOnServerDeployPhase extends DeployPhase {
    deploymentInput: ServerDeploymentInput;
}
export enum ScheduleDays {
    None = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 4,
    Thursday = 8,
    Friday = 16,
    Saturday = 32,
    Sunday = 64,
    All = 127,
}
export interface ScheduledReleaseTrigger extends ReleaseTriggerBase {
    /**
     * Release schedule for Scheduled Release trigger type
     */
    schedule: ReleaseSchedule;
}
export enum SenderType {
    ServiceAccount = 1,
    RequestingUser = 2,
}
export interface ServerDeploymentInput extends BaseDeploymentInput {
    parallelExecution: ExecutionInput;
}
export interface SourceIdInput {
    id: string;
    name: string;
}
export interface SourceRepoTrigger extends ReleaseTriggerBase {
    alias: string;
    branchFilters: string[];
}
export interface SummaryMailSection {
    htmlContent: string;
    rank: number;
    sectionType: MailSectionType;
    title: string;
}
export interface TaskOrchestrationPlanGroupReference {
    planGroup: string;
    projectId: string;
}
export interface TaskOrchestrationPlanGroupsStartedEvent {
    planGroups: TaskOrchestrationPlanGroupReference[];
}
export enum TaskStatus {
    Unknown = 0,
    Pending = 1,
    InProgress = 2,
    Success = 3,
    Failure = 4,
    Canceled = 5,
    Skipped = 6,
    Succeeded = 7,
    Failed = 8,
    PartiallySucceeded = 9,
}
export interface TimeZone {
    displayName: string;
    id: string;
}
export interface TimeZoneList {
    utcTimeZone: TimeZone;
    validTimeZones: TimeZone[];
}
export interface VariableGroup {
    /**
     * Gets or sets the identity who created.
     */
    createdBy: VSS_Common_Contracts.IdentityRef;
    /**
     * Gets date on which it got created.
     */
    createdOn: Date;
    /**
     * Gets or sets description.
     */
    description: string;
    /**
     * Gets the unique identifier of this field.
     */
    id: number;
    /**
     * Gets or sets the identity who modified.
     */
    modifiedBy: VSS_Common_Contracts.IdentityRef;
    /**
     * Gets date on which it got modified.
     */
    modifiedOn: Date;
    /**
     * Gets or sets name.
     */
    name: string;
    /**
     * Gets or sets provider data.
     */
    providerData: VariableGroupProviderData;
    /**
     * Gets or sets type.
     */
    type: string;
    variables: {
        [key: string]: VariableValue;
    };
}
export enum VariableGroupActionFilter {
    None = 0,
    Manage = 2,
    Use = 16,
}
export interface VariableGroupProviderData {
}
export interface VariableValue {
    isSecret: boolean;
    value: string;
}
export interface WorkflowTask {
    alwaysRun: boolean;
    condition: string;
    continueOnError: boolean;
    definitionType: string;
    enabled: boolean;
    inputs: {
        [key: string]: string;
    };
    name: string;
    overrideInputs: {
        [key: string]: string;
    };
    refName: string;
    taskId: string;
    timeoutInMinutes: number;
    version: string;
}
export interface WorkflowTaskReference {
    id: string;
    name: string;
    version: string;
}
export var TypeInfo: {
    AgentArtifactDefinition: any;
    AgentArtifactType: {
        enumValues: {
            "xamlBuild": number;
            "build": number;
            "jenkins": number;
            "fileShare": number;
            "nuget": number;
            "tfsOnPrem": number;
            "gitHub": number;
            "tFGit": number;
            "externalTfsBuild": number;
            "custom": number;
            "tfvc": number;
        };
    };
    AgentBasedDeployPhase: any;
    AgentDeploymentInput: any;
    ApprovalStatus: {
        enumValues: {
            "undefined": number;
            "pending": number;
            "approved": number;
            "rejected": number;
            "reassigned": number;
            "canceled": number;
            "skipped": number;
        };
    };
    ApprovalType: {
        enumValues: {
            "undefined": number;
            "preDeploy": number;
            "postDeploy": number;
            "all": number;
        };
    };
    ArtifactContributionDefinition: any;
    ArtifactSourceTrigger: any;
    ArtifactTypeDefinition: any;
    AuditAction: {
        enumValues: {
            "add": number;
            "update": number;
            "delete": number;
        };
    };
    AuthorizationHeaderFor: {
        enumValues: {
            "revalidateApproverIdentity": number;
            "onBehalfOf": number;
        };
    };
    AutoTriggerIssue: any;
    AzureKeyVaultVariableGroupProviderData: any;
    AzureKeyVaultVariableValue: any;
    Change: any;
    Condition: any;
    ConditionType: {
        enumValues: {
            "undefined": number;
            "event": number;
            "environmentState": number;
            "artifact": number;
        };
    };
    ContinuousDeploymentTriggerIssue: any;
    Deployment: any;
    DeploymentApprovalCompletedEvent: any;
    DeploymentApprovalPendingEvent: any;
    DeploymentAttempt: any;
    DeploymentAuthorizationInfo: any;
    DeploymentAuthorizationOwner: {
        enumValues: {
            "automatic": number;
            "deploymentSubmitter": number;
            "firstPreDeploymentApprover": number;
        };
    };
    DeploymentCompletedEvent: any;
    DeploymentExpands: {
        enumValues: {
            "all": number;
            "deploymentOnly": number;
            "approvals": number;
            "artifacts": number;
        };
    };
    DeploymentJob: any;
    DeploymentManualInterventionPendingEvent: any;
    DeploymentOperationStatus: {
        enumValues: {
            "undefined": number;
            "queued": number;
            "scheduled": number;
            "pending": number;
            "approved": number;
            "rejected": number;
            "deferred": number;
            "queuedForAgent": number;
            "phaseInProgress": number;
            "phaseSucceeded": number;
            "phasePartiallySucceeded": number;
            "phaseFailed": number;
            "canceled": number;
            "phaseCanceled": number;
            "manualInterventionPending": number;
            "queuedForPipeline": number;
            "all": number;
        };
    };
    DeploymentQueryParameters: any;
    DeploymentReason: {
        enumValues: {
            "none": number;
            "manual": number;
            "automated": number;
            "scheduled": number;
        };
    };
    DeploymentStartedEvent: any;
    DeploymentStatus: {
        enumValues: {
            "undefined": number;
            "notDeployed": number;
            "inProgress": number;
            "succeeded": number;
            "partiallySucceeded": number;
            "failed": number;
            "all": number;
        };
    };
    DeployPhase: any;
    DeployPhaseStatus: {
        enumValues: {
            "undefined": number;
            "notStarted": number;
            "inProgress": number;
            "partiallySucceeded": number;
            "succeeded": number;
            "failed": number;
            "canceled": number;
            "skipped": number;
        };
    };
    DeployPhaseTypes: {
        enumValues: {
            "undefined": number;
            "agentBasedDeployment": number;
            "runOnServer": number;
            "machineGroupBasedDeployment": number;
        };
    };
    EnvironmentStatus: {
        enumValues: {
            "undefined": number;
            "notStarted": number;
            "inProgress": number;
            "succeeded": number;
            "canceled": number;
            "rejected": number;
            "queued": number;
            "scheduled": number;
            "partiallySucceeded": number;
        };
    };
    ExecutionInput: any;
    Folder: any;
    FolderPathQueryOrder: {
        enumValues: {
            "none": number;
            "ascending": number;
            "descending": number;
        };
    };
    IssueSource: {
        enumValues: {
            "none": number;
            "user": number;
            "system": number;
        };
    };
    MachineGroupBasedDeployPhase: any;
    MailMessage: any;
    MailSectionType: {
        enumValues: {
            "details": number;
            "environments": number;
            "issues": number;
            "testResults": number;
            "workItems": number;
            "releaseInfo": number;
        };
    };
    ManualIntervention: any;
    ManualInterventionStatus: {
        enumValues: {
            "unknown": number;
            "pending": number;
            "rejected": number;
            "approved": number;
            "canceled": number;
        };
    };
    ManualInterventionUpdateMetadata: any;
    MultiConfigInput: any;
    MultiMachineInput: any;
    ParallelExecutionInputBase: any;
    ParallelExecutionTypes: {
        enumValues: {
            "none": number;
            "multiConfiguration": number;
            "multiMachine": number;
        };
    };
    PropertySelector: any;
    PropertySelectorType: {
        enumValues: {
            "inclusion": number;
            "exclusion": number;
        };
    };
    Release: any;
    ReleaseAbandonedEvent: any;
    ReleaseApproval: any;
    ReleaseApprovalHistory: any;
    ReleaseApprovalPendingEvent: any;
    ReleaseCondition: any;
    ReleaseCreatedEvent: any;
    ReleaseDefinition: any;
    ReleaseDefinitionEnvironment: any;
    ReleaseDefinitionEnvironmentTemplate: any;
    ReleaseDefinitionExpands: {
        enumValues: {
            "none": number;
            "environments": number;
            "artifacts": number;
            "triggers": number;
            "variables": number;
            "tags": number;
            "lastRelease": number;
        };
    };
    ReleaseDefinitionQueryOrder: {
        enumValues: {
            "idAscending": number;
            "idDescending": number;
            "nameAscending": number;
            "nameDescending": number;
        };
    };
    ReleaseDefinitionRevision: any;
    ReleaseDefinitionSource: {
        enumValues: {
            "undefined": number;
            "restApi": number;
            "userInterface": number;
            "ibiza": number;
            "portalExtensionApi": number;
        };
    };
    ReleaseDefinitionSummary: any;
    ReleaseDeployPhase: any;
    ReleaseEnvironment: any;
    ReleaseEnvironmentCompletedEvent: any;
    ReleaseEnvironmentUpdateMetadata: any;
    ReleaseExpands: {
        enumValues: {
            "none": number;
            "environments": number;
            "artifacts": number;
            "approvals": number;
            "manualInterventions": number;
            "variables": number;
            "tags": number;
        };
    };
    ReleaseQueryOrder: {
        enumValues: {
            "descending": number;
            "ascending": number;
        };
    };
    ReleaseReason: {
        enumValues: {
            "none": number;
            "manual": number;
            "continuousIntegration": number;
            "schedule": number;
            "individualCI": number;
            "batchedCI": number;
        };
    };
    ReleaseReference: any;
    ReleaseRevision: any;
    ReleaseSchedule: any;
    ReleaseStartMetadata: any;
    ReleaseStatus: {
        enumValues: {
            "undefined": number;
            "draft": number;
            "active": number;
            "abandoned": number;
        };
    };
    ReleaseTask: any;
    ReleaseTasksUpdatedEvent: any;
    ReleaseTriggerBase: any;
    ReleaseTriggerType: {
        enumValues: {
            "undefined": number;
            "artifactSource": number;
            "schedule": number;
            "sourceRepo": number;
        };
    };
    ReleaseUpdatedEvent: any;
    ReleaseUpdateMetadata: any;
    RunOnServerDeployPhase: any;
    ScheduleDays: {
        enumValues: {
            "none": number;
            "monday": number;
            "tuesday": number;
            "wednesday": number;
            "thursday": number;
            "friday": number;
            "saturday": number;
            "sunday": number;
            "all": number;
        };
    };
    ScheduledReleaseTrigger: any;
    SenderType: {
        enumValues: {
            "serviceAccount": number;
            "requestingUser": number;
        };
    };
    ServerDeploymentInput: any;
    SourceRepoTrigger: any;
    SummaryMailSection: any;
    TaskStatus: {
        enumValues: {
            "unknown": number;
            "pending": number;
            "inProgress": number;
            "success": number;
            "failure": number;
            "canceled": number;
            "skipped": number;
            "succeeded": number;
            "failed": number;
            "partiallySucceeded": number;
        };
    };
    VariableGroup: any;
    VariableGroupActionFilter: {
        enumValues: {
            "none": number;
            "manage": number;
            "use": number;
        };
    };
};
}
declare module "ReleaseManagement/Core/ExtensionContracts" {
import RMContracts = require("ReleaseManagement/Core/Contracts");
/**
* The type of object to be used when contributing a link. linkId field will be used as an argument to onLickClicked callback.
*/
export interface IContributionHtmlLink {
    linkId: string;
    onLinkClicked: (linkId: string) => void;
}
export interface IContributionHtmlSpanData {
    text: string;
    foregroundColor: string;
    link: IContributionHtmlLink;
}
/**
* The type of object to be used when contributing a hypertext string with link.
*/
export interface IContributionHtmlData {
    spanItems: IContributionHtmlSpanData[];
}
/**
* Interface defining the configuration that is shared between extension targeted at "ms.vss-releaseManagement-web.release-details-view" and the host
*/
export interface IReleaseViewExtensionConfig {
    /**
    * Required if reacting to the current release.
    * More than one callbacks can be added, and all will be called.
    * It is important to have atleast one call back, since that's how an extension can get information about the current release.
    */
    onReleaseChanged: (handler: (release: RMContracts.Release) => void) => void;
    /**
    * Optional, If needed, this callback will be called when this particular extension is selected/displayed
    */
    onViewDisplayed: (onDisplayedCallBack: () => void) => void;
    /**
    * Optional, for a given tab id, which can be contribution id,
    * the corresponding tab is selected if the tab is visible.
    */
    selectTab: (tabId: string) => void;
}
export interface IReleaseEnvironmentsSummaryDataExtension {
    /**
    * Required if reacting to the current release. RM will call this function whenever it paints environments summary section for a given release.
    */
    onReleaseChanged: (release: RMContracts.Release) => IPromise<{
        [environmentId: number]: IContributionHtmlData;
    }>;
}
export interface IReleaseEnvironmentsSummaryDataExtensionConfig {
    /**
    * Optional, for a given tab id, which is essentially contribution id,
    * the corresponding tab is selected if the tab is visible.
    */
    selectTab: (tabId: string, additionalUrlParams?: {
        [key: string]: string;
    }) => void;
}
export interface IDeploymentWidgetDataExtension {
    /**
    * Deployment widget will call this function whenever it tries to render/refresh the widget view.
    * As the amount of data being fetched is too huge, we need to batch it.
    * Calling triggerFetchData will only start the process of fetching required data in batches.
    * The extension will be calling updateContributionData as and when it has finished fetching results for one of the batches.
    */
    triggerFetchingContributionData: (releaseEnvironments: {
        releaseId: number;
        environmentId: number;
    }[]) => void;
}
export interface IDeploymentWidgetDataExtensionConfig {
    /**
    * The extension will be calling this as and when it has finished fetching results for one of the batches.
    */
    updateContributionData: (overlayData: IDeploymentWidgetOverlayData[]) => void;
}
/**
    * releaseEnvironmentReference -> release and environment to which the test results belong to.
    * data: Contains value of the overlay metric
    * toolTipData: KeyValuePair -> These details will be added to the tool-tip shown on hover
    * targetUrl: The url to navigate to on clicking the overlayData.
*/
export interface IDeploymentWidgetOverlayData {
    releaseEnvironmentReference: IReleaseEnvironmentReference;
    data: string;
    targetUrl: string;
    toolTipData: string[];
}
export interface IReleaseEnvironmentReference {
    releaseId: number;
    environmentId: number;
}
}
declare module "ReleaseManagement/Core/RestClient" {
import Contracts = require("ReleaseManagement/Core/Contracts");
import VSS_FormInput_Contracts = require("VSS/Common/Contracts/FormInput");
import VSS_WebApi = require("VSS/WebApi/RestClient");
export class CommonMethods2To4 extends VSS_WebApi.VssHttpClient {
    static serviceInstanceId: string;
    protected agentartifactsApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API] Returns the artifact details that automation agent requires
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @return IPromise<Contracts.AgentArtifactDefinition[]>
     */
    getAgentArtifactDefinitions(project: string, releaseId: number): IPromise<Contracts.AgentArtifactDefinition[]>;
}
export class CommonMethods2_2To4 extends CommonMethods2To4 {
    protected approvalsApiVersion: string;
    protected approvalsApiVersion_250c7158: string;
    protected approvalsApiVersion_9328e074: string;
    protected changesApiVersion: string;
    protected definitionsApiVersion: string;
    protected environmentsApiVersion: string;
    protected environmenttemplatesApiVersion: string;
    protected historyApiVersion: string;
    protected inputvaluesqueryApiVersion: string;
    protected logsApiVersion: string;
    protected logsApiVersion_c37fbab5: string;
    protected releasesApiVersion: string;
    protected revisionsApiVersion: string;
    protected sendmailApiVersion: string;
    protected tasksApiVersion: string;
    protected typesApiVersion: string;
    protected versionsApiVersion: string;
    protected workitemsApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} baseReleaseId
     * @param {number} top
     * @return IPromise<Contracts.ReleaseWorkItemRef[]>
     */
    getReleaseWorkItemsRefs(project: string, releaseId: number, baseReleaseId?: number, top?: number): IPromise<Contracts.ReleaseWorkItemRef[]>;
    /**
     * [Preview API]
     *
     * @param {Contracts.Artifact[]} artifacts
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.ArtifactVersionQueryResult>
     */
    getArtifactVersionsForSources(artifacts: Contracts.Artifact[], project: string): IPromise<Contracts.ArtifactVersionQueryResult>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseDefinitionId
     * @return IPromise<Contracts.ArtifactVersionQueryResult>
     */
    getArtifactVersions(project: string, releaseDefinitionId: number): IPromise<Contracts.ArtifactVersionQueryResult>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.ArtifactTypeDefinition[]>
     */
    getArtifactTypeDefinitions(project: string): IPromise<Contracts.ArtifactTypeDefinition[]>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} environmentId
     * @param {number} attemptId
     * @return IPromise<Contracts.ReleaseTask[]>
     */
    getTasks(project: string, releaseId: number, environmentId: number, attemptId?: number): IPromise<Contracts.ReleaseTask[]>;
    /**
     * [Preview API]
     *
     * @param {Contracts.MailMessage} mailMessage
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @return IPromise<void>
     */
    sendSummaryMail(mailMessage: Contracts.MailMessage, project: string, releaseId: number): IPromise<void>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @return IPromise<Contracts.SummaryMailSection[]>
     */
    getSummaryMailSections(project: string, releaseId: number): IPromise<Contracts.SummaryMailSection[]>;
    /**
     * [Preview API] Get revision history for a release definition
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId - Id of the definition.
     * @return IPromise<Contracts.ReleaseDefinitionRevision[]>
     */
    getReleaseDefinitionHistory(project: string, definitionId: number): IPromise<Contracts.ReleaseDefinitionRevision[]>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId
     * @param {number} revision
     * @return IPromise<string>
     */
    getDefinitionRevision(project: string, definitionId: number, revision: number): IPromise<string>;
    /**
     * [Preview API] Update few properties of a release.
     *
     * @param {Contracts.ReleaseUpdateMetadata} releaseUpdateMetadata - Properties of release to update.
     * @param {string} project - Project ID or project name
     * @param {number} releaseId - Id of the release to update.
     * @return IPromise<Contracts.Release>
     */
    updateReleaseResource(releaseUpdateMetadata: Contracts.ReleaseUpdateMetadata, project: string, releaseId: number): IPromise<Contracts.Release>;
    /**
     * [Preview API] Update a complete release object.
     *
     * @param {Contracts.Release} release - Release object for update.
     * @param {string} project - Project ID or project name
     * @param {number} releaseId - Id of the release to update.
     * @return IPromise<Contracts.Release>
     */
    updateRelease(release: Contracts.Release, project: string, releaseId: number): IPromise<Contracts.Release>;
    /**
     * [Preview API] Get release for a given revision number.
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId - Id of the release.
     * @param {number} definitionSnapshotRevision - Definition snapshot revision number.
     * @return IPromise<string>
     */
    getReleaseRevision(project: string, releaseId: number, definitionSnapshotRevision: number): IPromise<string>;
    /**
     * [Preview API] Get release summary of a given definition Id.
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId - Id of the definition to get release summary.
     * @param {number} releaseCount - Count of releases to be included in summary.
     * @param {boolean} includeArtifact - Include artifact details.Default is 'false'.
     * @param {number[]} definitionEnvironmentIdsFilter
     * @return IPromise<Contracts.ReleaseDefinitionSummary>
     */
    getReleaseDefinitionSummary(project: string, definitionId: number, releaseCount: number, includeArtifact?: boolean, definitionEnvironmentIdsFilter?: number[]): IPromise<Contracts.ReleaseDefinitionSummary>;
    /**
     * [Preview API] Soft delete a release
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId - Id of the release.
     * @param {string} comment - Comment for deleting a release.
     * @return IPromise<void>
     */
    deleteRelease(project: string, releaseId: number, comment?: string): IPromise<void>;
    /**
     * [Preview API] Create a release.
     *
     * @param {Contracts.ReleaseStartMetadata} releaseStartMetadata - Metadata to create a release.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.Release>
     */
    createRelease(releaseStartMetadata: Contracts.ReleaseStartMetadata, project: string): IPromise<Contracts.Release>;
    /**
     * [Preview API] Gets logs
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId - Id of the release.
     * @param {number} environmentId - Id of the environment.
     * @param {number} taskId - Task Id for the log.
     * @param {number} attemptId - Id of the attempt.
     * @return IPromise<string>
     */
    getLog(project: string, releaseId: number, environmentId: number, taskId: number, attemptId?: number): IPromise<string>;
    /**
     * [Preview API] Get logs for a release Id.
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId - Id of the release.
     * @return IPromise<ArrayBuffer>
     */
    getLogs(project: string, releaseId: number): IPromise<ArrayBuffer>;
    /**
     * [Preview API]
     *
     * @param {VSS_FormInput_Contracts.InputValuesQuery} query
     * @param {string} project - Project ID or project name
     * @return IPromise<VSS_FormInput_Contracts.InputValuesQuery>
     */
    getInputValues(query: VSS_FormInput_Contracts.InputValuesQuery, project: string): IPromise<VSS_FormInput_Contracts.InputValuesQuery>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @return IPromise<Contracts.ReleaseRevision[]>
     */
    getReleaseHistory(project: string, releaseId: number): IPromise<Contracts.ReleaseRevision[]>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.ReleaseDefinitionEnvironmentTemplate[]>
     */
    listDefinitionEnvironmentTemplates(project: string): IPromise<Contracts.ReleaseDefinitionEnvironmentTemplate[]>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} templateId
     * @return IPromise<Contracts.ReleaseDefinitionEnvironmentTemplate>
     */
    getDefinitionEnvironmentTemplate(project: string, templateId: string): IPromise<Contracts.ReleaseDefinitionEnvironmentTemplate>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} templateId
     * @return IPromise<void>
     */
    deleteDefinitionEnvironmentTemplate(project: string, templateId: string): IPromise<void>;
    /**
     * [Preview API]
     *
     * @param {Contracts.ReleaseDefinitionEnvironmentTemplate} template
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.ReleaseDefinitionEnvironmentTemplate>
     */
    createDefinitionEnvironmentTemplate(template: Contracts.ReleaseDefinitionEnvironmentTemplate, project: string): IPromise<Contracts.ReleaseDefinitionEnvironmentTemplate>;
    /**
     * [Preview API] Update the status of a release environment
     *
     * @param {Contracts.ReleaseEnvironmentUpdateMetadata} environmentUpdateData - Environment update meta data.
     * @param {string} project - Project ID or project name
     * @param {number} releaseId - Id of the release.
     * @param {number} environmentId - Id of the environment.
     * @return IPromise<Contracts.ReleaseEnvironment>
     */
    updateReleaseEnvironment(environmentUpdateData: Contracts.ReleaseEnvironmentUpdateMetadata, project: string, releaseId: number, environmentId: number): IPromise<Contracts.ReleaseEnvironment>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} environmentId
     * @return IPromise<Contracts.ReleaseEnvironment>
     */
    getReleaseEnvironment(project: string, releaseId: number, environmentId: number): IPromise<Contracts.ReleaseEnvironment>;
    /**
     * [Preview API] Update a release definition.
     *
     * @param {Contracts.ReleaseDefinition} releaseDefinition - Release definition object to update.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.ReleaseDefinition>
     */
    updateReleaseDefinition(releaseDefinition: Contracts.ReleaseDefinition, project: string): IPromise<Contracts.ReleaseDefinition>;
    /**
     * [Preview API] Get a list of release definitions.
     *
     * @param {string} project - Project ID or project name
     * @param {string} searchText - Get release definitions with names starting with searchText.
     * @param {Contracts.ReleaseDefinitionExpands} expand - The properties that should be expanded in the list of Release definitions.
     * @param {string} artifactType - Release definitions with given artifactType will be returned. Values can be Build, Jenkins, GitHub, Nuget, Team Build (external), ExternalTFSBuild, Git, TFVC, ExternalTfsXamlBuild.
     * @param {string} artifactSourceId - Release definitions with given artifactSourceId will be returned. e.g. For build it would be {projectGuid}:{BuildDefinitionId}, for Jenkins it would be {JenkinsConnectionId}:{JenkinsDefinitionId}, for TfsOnPrem it would be {TfsOnPremConnectionId}:{ProjectName}:{TfsOnPremDefinitionId}. For third-party artifacts e.g. TeamCity, BitBucket you may refer 'uniqueSourceIdentifier' inside vss-extension.json at https://github.com/Microsoft/vsts-rm-extensions/blob/master/Extensions.
     * @param {number} top - Number of release definitions to get.
     * @param {string} continuationToken - Gets the release definitions after the continuation token provided.
     * @param {Contracts.ReleaseDefinitionQueryOrder} queryOrder - Gets the results in the defined order. Default is 'IdAscending'.
     * @param {string} path - Gets the release definitions under the specified path.
     * @param {boolean} isExactNameMatch - 'true'to gets the release definitions with exact match as specified in searchText. Default is 'false'.
     * @param {string[]} tagFilter - A comma-delimited list of tags. Only release definitions with these tags will be returned.
     * @param {string[]} propertyFilters - A comma-delimited list of extended properties to retrieve.
     * @param {string[]} definitionIdFilter - A comma-delimited list of release definitions to retrieve.
     * @return IPromise<Contracts.ReleaseDefinition[]>
     */
    getReleaseDefinitions(project: string, searchText?: string, expand?: Contracts.ReleaseDefinitionExpands, artifactType?: string, artifactSourceId?: string, top?: number, continuationToken?: string, queryOrder?: Contracts.ReleaseDefinitionQueryOrder, path?: string, isExactNameMatch?: boolean, tagFilter?: string[], propertyFilters?: string[], definitionIdFilter?: string[]): IPromise<Contracts.ReleaseDefinition[]>;
    /**
     * [Preview API] Get release definition of a given revision.
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId - Id of the release definition.
     * @param {number} revision - Revision number of the release definition.
     * @return IPromise<string>
     */
    getReleaseDefinitionRevision(project: string, definitionId: number, revision: number): IPromise<string>;
    /**
     * [Preview API] Get a release definition.
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId - Id of the release definition.
     * @param {string[]} propertyFilters - A comma-delimited list of extended properties to retrieve.
     * @return IPromise<Contracts.ReleaseDefinition>
     */
    getReleaseDefinition(project: string, definitionId: number, propertyFilters?: string[]): IPromise<Contracts.ReleaseDefinition>;
    /**
     * [Preview API] Delete a release definition.
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId - Id of the release definition.
     * @return IPromise<void>
     */
    deleteReleaseDefinition(project: string, definitionId: number): IPromise<void>;
    /**
     * [Preview API] Create a release definition
     *
     * @param {Contracts.ReleaseDefinition} releaseDefinition - release definition object to create.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.ReleaseDefinition>
     */
    createReleaseDefinition(releaseDefinition: Contracts.ReleaseDefinition, project: string): IPromise<Contracts.ReleaseDefinition>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} baseReleaseId
     * @param {number} top
     * @return IPromise<Contracts.Change[]>
     */
    getReleaseChanges(project: string, releaseId: number, baseReleaseId?: number, top?: number): IPromise<Contracts.Change[]>;
    /**
     * [Preview API] Get a list of approvals
     *
     * @param {string} project - Project ID or project name
     * @param {string} assignedToFilter - Approvals assigned to this user.
     * @param {Contracts.ApprovalStatus} statusFilter - Approvals with this status. Default is 'pending'.
     * @param {number[]} releaseIdsFilter - Approvals for release id(s) mentioned in the filter. Multiple releases can be mentioned by separating them with ',' e.g. releaseIdsFilter=1,2,3,4.
     * @param {Contracts.ApprovalType} typeFilter - Approval with this type.
     * @param {number} top - Number of approvals to get. Default is 50.
     * @param {number} continuationToken - Gets the approvals after the continuation token provided.
     * @param {Contracts.ReleaseQueryOrder} queryOrder - Gets the results in the defined order of created approvals. Default is 'descending'.
     * @param {boolean} includeMyGroupApprovals - 'true' to include my group approvals. Default is 'false'.
     * @return IPromise<Contracts.ReleaseApproval[]>
     */
    getApprovals(project: string, assignedToFilter?: string, statusFilter?: Contracts.ApprovalStatus, releaseIdsFilter?: number[], typeFilter?: Contracts.ApprovalType, top?: number, continuationToken?: number, queryOrder?: Contracts.ReleaseQueryOrder, includeMyGroupApprovals?: boolean): IPromise<Contracts.ReleaseApproval[]>;
    /**
     * [Preview API] Update status of an approval
     *
     * @param {Contracts.ReleaseApproval} approval - ReleaseApproval object having status, approver and comments.
     * @param {string} project - Project ID or project name
     * @param {number} approvalId - Id of the approval.
     * @return IPromise<Contracts.ReleaseApproval>
     */
    updateReleaseApproval(approval: Contracts.ReleaseApproval, project: string, approvalId: number): IPromise<Contracts.ReleaseApproval>;
    /**
     * [Preview API] Get an approval.
     *
     * @param {string} project - Project ID or project name
     * @param {number} approvalId - Id of the approval.
     * @param {boolean} includeHistory - 'true' to include history of the approval. Default is 'false'.
     * @return IPromise<Contracts.ReleaseApproval>
     */
    getApproval(project: string, approvalId: number, includeHistory?: boolean): IPromise<Contracts.ReleaseApproval>;
    /**
     * [Preview API] Get approval history.
     *
     * @param {string} project - Project ID or project name
     * @param {number} approvalStepId - Id of the approval.
     * @return IPromise<Contracts.ReleaseApproval>
     */
    getApprovalHistory(project: string, approvalStepId: number): IPromise<Contracts.ReleaseApproval>;
}
export class CommonMethods3To4 extends CommonMethods2_2To4 {
    protected deploymentsApiVersion: string;
    protected logsApiVersion_17c91af7: string;
    protected manualInterventionsApiVersion: string;
    protected releasesApiVersion: string;
    protected releasesettingsApiVersion: string;
    protected sourcebranchesApiVersion: string;
    protected tasksApiVersion_4259191d: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} environmentId
     * @param {number} releaseDeployPhaseId
     * @return IPromise<Contracts.ReleaseTask[]>
     */
    getTasksForTaskGroup(project: string, releaseId: number, environmentId: number, releaseDeployPhaseId: number): IPromise<Contracts.ReleaseTask[]>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId
     * @return IPromise<string[]>
     */
    getSourceBranches(project: string, definitionId: number): IPromise<string[]>;
    /**
     * [Preview API] Updates the release settings
     *
     * @param {Contracts.ReleaseSettings} releaseSettings
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.ReleaseSettings>
     */
    updateReleaseSettings(releaseSettings: Contracts.ReleaseSettings, project: string): IPromise<Contracts.ReleaseSettings>;
    /**
     * [Preview API] Gets the release settings
     *
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.ReleaseSettings>
     */
    getReleaseSettings(project: string): IPromise<Contracts.ReleaseSettings>;
    /**
     * [Preview API] Undelete a soft deleted release.
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId - Id of release to be undeleted.
     * @param {string} comment - Any comment for undeleting.
     * @return IPromise<void>
     */
    undeleteRelease(project: string, releaseId: number, comment: string): IPromise<void>;
    /**
     * [Preview API] Get a Release
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId - Id of the release.
     * @param {boolean} includeAllApprovals - Include all approvals in the result. Default is 'true'.
     * @param {string[]} propertyFilters - A comma-delimited list of properties to include in the results.
     * @return IPromise<Contracts.Release>
     */
    getRelease(project: string, releaseId: number, includeAllApprovals?: boolean, propertyFilters?: string[]): IPromise<Contracts.Release>;
    /**
     * [Preview API]
     *
     * @param {Contracts.ManualInterventionUpdateMetadata} manualInterventionUpdateMetadata
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} manualInterventionId
     * @return IPromise<Contracts.ManualIntervention>
     */
    updateManualIntervention(manualInterventionUpdateMetadata: Contracts.ManualInterventionUpdateMetadata, project: string, releaseId: number, manualInterventionId: number): IPromise<Contracts.ManualIntervention>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @return IPromise<Contracts.ManualIntervention[]>
     */
    getManualInterventions(project: string, releaseId: number): IPromise<Contracts.ManualIntervention[]>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} manualInterventionId
     * @return IPromise<Contracts.ManualIntervention>
     */
    getManualIntervention(project: string, releaseId: number, manualInterventionId: number): IPromise<Contracts.ManualIntervention>;
    /**
     * [Preview API] Gets the task log of a release as a plain text file.
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId - Id of the release.
     * @param {number} environmentId - Id of the environment.
     * @param {number} releaseDeployPhaseId - Release deploy phase Id.
     * @param {number} taskId - Task Id for the log.
     * @return IPromise<string>
     */
    getTaskLog(project: string, releaseId: number, environmentId: number, releaseDeployPhaseId: number, taskId: number): IPromise<string>;
    /**
     * [Preview API]
     *
     * @param {Contracts.DeploymentQueryParameters} queryParameters
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.Deployment[]>
     */
    getDeploymentsForMultipleEnvironments(queryParameters: Contracts.DeploymentQueryParameters, project: string): IPromise<Contracts.Deployment[]>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId
     * @param {number} definitionEnvironmentId
     * @param {string} createdBy
     * @param {Date} minModifiedTime
     * @param {Date} maxModifiedTime
     * @param {Contracts.DeploymentStatus} deploymentStatus
     * @param {Contracts.DeploymentOperationStatus} operationStatus
     * @param {boolean} latestAttemptsOnly
     * @param {Contracts.ReleaseQueryOrder} queryOrder
     * @param {number} top
     * @param {number} continuationToken
     * @param {string} createdFor
     * @return IPromise<Contracts.Deployment[]>
     */
    getDeployments(project: string, definitionId?: number, definitionEnvironmentId?: number, createdBy?: string, minModifiedTime?: Date, maxModifiedTime?: Date, deploymentStatus?: Contracts.DeploymentStatus, operationStatus?: Contracts.DeploymentOperationStatus, latestAttemptsOnly?: boolean, queryOrder?: Contracts.ReleaseQueryOrder, top?: number, continuationToken?: number, createdFor?: string): IPromise<Contracts.Deployment[]>;
}
export class CommonMethods3_1To4 extends CommonMethods3To4 {
    protected favoritesApiVersion: string;
    protected foldersApiVersion: string;
    protected metricsApiVersion: string;
    protected projectsApiVersion: string;
    protected releasesApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API] Get a list of releases
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId - Releases from this release definition Id.
     * @param {number} definitionEnvironmentId
     * @param {string} searchText - Releases with names starting with searchText.
     * @param {string} createdBy - Releases created by this user.
     * @param {Contracts.ReleaseStatus} statusFilter - Releases that have this status.
     * @param {number} environmentStatusFilter
     * @param {Date} minCreatedTime - Releases that were created after this time.
     * @param {Date} maxCreatedTime - Releases that were created before this time.
     * @param {Contracts.ReleaseQueryOrder} queryOrder - Gets the results in the defined order of created date for releases. Default is descending.
     * @param {number} top - Number of releases to get. Default is 50.
     * @param {number} continuationToken - Gets the releases after the continuation token provided.
     * @param {Contracts.ReleaseExpands} expand - The property that should be expanded in the list of releases.
     * @param {string} artifactTypeId - Releases with given artifactTypeId will be returned. Values can be Build, Jenkins, GitHub, Nuget, Team Build (external), ExternalTFSBuild, Git, TFVC, ExternalTfsXamlBuild.
     * @param {string} sourceId - Unique identifier of the artifact used. e.g. For build it would be {projectGuid}:{BuildDefinitionId}, for Jenkins it would be {JenkinsConnectionId}:{JenkinsDefinitionId}, for TfsOnPrem it would be {TfsOnPremConnectionId}:{ProjectName}:{TfsOnPremDefinitionId}. For third-party artifacts e.g. TeamCity, BitBucket you may refer 'uniqueSourceIdentifier' inside vss-extension.json https://github.com/Microsoft/vsts-rm-extensions/blob/master/Extensions.
     * @param {string} artifactVersionId - Releases with given artifactVersionId will be returned. E.g. in case of Build artifactType, it is buildId.
     * @param {string} sourceBranchFilter - Releases with given sourceBranchFilter will be returned.
     * @param {boolean} isDeleted - Gets the soft deleted releases, if true.
     * @param {string[]} tagFilter - A comma-delimited list of tags. Only releases with these tags will be returned.
     * @param {string[]} propertyFilters - A comma-delimited list of extended properties to retrieve.
     * @return IPromise<Contracts.Release[]>
     */
    getReleases(project?: string, definitionId?: number, definitionEnvironmentId?: number, searchText?: string, createdBy?: string, statusFilter?: Contracts.ReleaseStatus, environmentStatusFilter?: number, minCreatedTime?: Date, maxCreatedTime?: Date, queryOrder?: Contracts.ReleaseQueryOrder, top?: number, continuationToken?: number, expand?: Contracts.ReleaseExpands, artifactTypeId?: string, sourceId?: string, artifactVersionId?: string, sourceBranchFilter?: string, isDeleted?: boolean, tagFilter?: string[], propertyFilters?: string[]): IPromise<Contracts.Release[]>;
    /**
     * [Preview API]
     *
     * @param {string} artifactType
     * @param {string} artifactSourceId
     * @return IPromise<Contracts.ProjectReference[]>
     */
    getReleaseProjects(artifactType: string, artifactSourceId: string): IPromise<Contracts.ProjectReference[]>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {Date} minMetricsTime
     * @return IPromise<Contracts.Metric[]>
     */
    getMetrics(project: string, minMetricsTime?: Date): IPromise<Contracts.Metric[]>;
    /**
     * [Preview API] Updates an existing folder at given  existing path
     *
     * @param {Contracts.Folder} folder
     * @param {string} project - Project ID or project name
     * @param {string} path
     * @return IPromise<Contracts.Folder>
     */
    updateFolder(folder: Contracts.Folder, project: string, path: string): IPromise<Contracts.Folder>;
    /**
     * [Preview API] Gets folders
     *
     * @param {string} project - Project ID or project name
     * @param {string} path
     * @param {Contracts.FolderPathQueryOrder} queryOrder
     * @return IPromise<Contracts.Folder[]>
     */
    getFolders(project: string, path?: string, queryOrder?: Contracts.FolderPathQueryOrder): IPromise<Contracts.Folder[]>;
    /**
     * [Preview API] Deletes a definition folder for given folder name and path and all it's existing definitions
     *
     * @param {string} project - Project ID or project name
     * @param {string} path
     * @return IPromise<void>
     */
    deleteFolder(project: string, path: string): IPromise<void>;
    /**
     * [Preview API] Creates a new folder
     *
     * @param {Contracts.Folder} folder
     * @param {string} project - Project ID or project name
     * @param {string} path
     * @return IPromise<Contracts.Folder>
     */
    createFolder(folder: Contracts.Folder, project: string, path: string): IPromise<Contracts.Folder>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} scope
     * @param {string} identityId
     * @return IPromise<Contracts.FavoriteItem[]>
     */
    getFavorites(project: string, scope: string, identityId?: string): IPromise<Contracts.FavoriteItem[]>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} scope
     * @param {string} identityId
     * @param {string} favoriteItemIds
     * @return IPromise<void>
     */
    deleteFavorites(project: string, scope: string, identityId?: string, favoriteItemIds?: string): IPromise<void>;
    /**
     * [Preview API]
     *
     * @param {Contracts.FavoriteItem[]} favoriteItems
     * @param {string} project - Project ID or project name
     * @param {string} scope
     * @param {string} identityId
     * @return IPromise<Contracts.FavoriteItem[]>
     */
    createFavorites(favoriteItems: Contracts.FavoriteItem[], project: string, scope: string, identityId?: string): IPromise<Contracts.FavoriteItem[]>;
}
export class CommonMethods3_2To4 extends CommonMethods3_1To4 {
    protected definitionEnvironmentsApiVersion: string;
    protected issuesApiVersion: string;
    protected tagsApiVersion: string;
    protected tagsApiVersion_3d21b4c8: string;
    protected tagsApiVersion_c5b602b6: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @return IPromise<string[]>
     */
    getTags(project: string): IPromise<string[]>;
    /**
     * [Preview API] Gets the tags for a release
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @return IPromise<string[]>
     */
    getReleaseTags(project: string, releaseId: number): IPromise<string[]>;
    /**
     * [Preview API] Deletes a tag from a release
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {string} tag
     * @return IPromise<string[]>
     */
    deleteReleaseTag(project: string, releaseId: number, tag: string): IPromise<string[]>;
    /**
     * [Preview API] Adds tag to a release
     *
     * @param {string[]} tags
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @return IPromise<string[]>
     */
    addReleaseTags(tags: string[], project: string, releaseId: number): IPromise<string[]>;
    /**
     * [Preview API] Adds a tag to a releaseId
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {string} tag
     * @return IPromise<string[]>
     */
    addReleaseTag(project: string, releaseId: number, tag: string): IPromise<string[]>;
    /**
     * [Preview API] Gets the tags for a definition
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseDefinitionId
     * @return IPromise<string[]>
     */
    getDefinitionTags(project: string, releaseDefinitionId: number): IPromise<string[]>;
    /**
     * [Preview API] Deletes a tag from a definition
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseDefinitionId
     * @param {string} tag
     * @return IPromise<string[]>
     */
    deleteDefinitionTag(project: string, releaseDefinitionId: number, tag: string): IPromise<string[]>;
    /**
     * [Preview API] Adds multiple tags to a definition
     *
     * @param {string[]} tags
     * @param {string} project - Project ID or project name
     * @param {number} releaseDefinitionId
     * @return IPromise<string[]>
     */
    addDefinitionTags(tags: string[], project: string, releaseDefinitionId: number): IPromise<string[]>;
    /**
     * [Preview API] Adds a tag to a definition
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseDefinitionId
     * @param {string} tag
     * @return IPromise<string[]>
     */
    addDefinitionTag(project: string, releaseDefinitionId: number, tag: string): IPromise<string[]>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {string} sourceId
     * @return IPromise<Contracts.AutoTriggerIssue[]>
     */
    getIssues(project: string, buildId: number, sourceId?: string): IPromise<Contracts.AutoTriggerIssue[]>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} taskGroupId
     * @param {string[]} propertyFilters
     * @return IPromise<Contracts.DefinitionEnvironmentReference[]>
     */
    getDefinitionEnvironments(project: string, taskGroupId?: string, propertyFilters?: string[]): IPromise<Contracts.DefinitionEnvironmentReference[]>;
}
/**
 * @exemptedapi
 */
export class ReleaseHttpClient4 extends CommonMethods3_2To4 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API]
     *
     * @param {string} artifactType
     * @param {string} sourceId
     * @param {string} artifactVersionId
     * @return IPromise<Contracts.AutoTriggerIssue[]>
     */
    getAutoTriggerIssues(artifactType: string, sourceId: string, artifactVersionId: string): IPromise<Contracts.AutoTriggerIssue[]>;
}
/**
 * @exemptedapi
 */
export class ReleaseHttpClient3_2 extends CommonMethods3_2To4 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class ReleaseHttpClient3_1 extends CommonMethods3_1To4 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API] Returns throttled queue as per the task hub license of parallel releases
     *
     * @param {string} projectId
     * @param {number} releaseId
     * @return IPromise<Contracts.QueuedReleaseData[]>
     */
    getQueuedReleases(projectId?: string, releaseId?: number): IPromise<Contracts.QueuedReleaseData[]>;
}
/**
 * @exemptedapi
 */
export class ReleaseHttpClient3 extends CommonMethods3To4 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API] Get Releases
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId - Releases from this release definition Id.
     * @param {number} definitionEnvironmentId
     * @param {string} searchText - Releases with names starting with searchText.
     * @param {string} createdBy - Releases created by this user.
     * @param {Contracts.ReleaseStatus} statusFilter - Releases that have this status.
     * @param {number} environmentStatusFilter
     * @param {Date} minCreatedTime - Releases that were created after this time.
     * @param {Date} maxCreatedTime - Releases that were created before this time.
     * @param {Contracts.ReleaseQueryOrder} queryOrder - Gets the results in the defined order of created date for releases. Default is descending.
     * @param {number} top - Number of releases to get. Default is 50.
     * @param {number} continuationToken - Gets the releases after the continuation token provided.
     * @param {Contracts.ReleaseExpands} expand - The property that should be expanded in the list of releases.
     * @param {string} artifactTypeId - Releases with given artifactTypeId will be returned. Values can be Build, Jenkins, GitHub, Nuget, Team Build (external), ExternalTFSBuild, Git, TFVC, ExternalTfsXamlBuild.
     * @param {string} sourceId - Unique identifier of the artifact used. e.g. For build it would be {projectGuid}:{BuildDefinitionId}, for Jenkins it would be {JenkinsConnectionId}:{JenkinsDefinitionId}, for TfsOnPrem it would be {TfsOnPremConnectionId}:{ProjectName}:{TfsOnPremDefinitionId}. For third-party artifacts e.g. TeamCity, BitBucket you may refer 'uniqueSourceIdentifier' inside vss-extension.json https://github.com/Microsoft/vsts-rm-extensions/blob/master/Extensions.
     * @param {string} artifactVersionId - Releases with given artifactVersionId will be returned. E.g. in case of Build artifactType, it is buildId.
     * @param {string} sourceBranchFilter - Releases with given sourceBranchFilter will be returned.
     * @param {boolean} isDeleted - Gets the soft deleted releases, if true.
     * @param {string[]} tagFilter - A comma-delimited list of tags. Only releases with these tags will be returned.
     * @param {string[]} propertyFilters - A comma-delimited list of extended properties to retrieve.
     * @return IPromise<Contracts.Release[]>
     */
    getReleases(project: string, definitionId?: number, definitionEnvironmentId?: number, searchText?: string, createdBy?: string, statusFilter?: Contracts.ReleaseStatus, environmentStatusFilter?: number, minCreatedTime?: Date, maxCreatedTime?: Date, queryOrder?: Contracts.ReleaseQueryOrder, top?: number, continuationToken?: number, expand?: Contracts.ReleaseExpands, artifactTypeId?: string, sourceId?: string, artifactVersionId?: string, sourceBranchFilter?: string, isDeleted?: boolean, tagFilter?: string[], propertyFilters?: string[]): IPromise<Contracts.Release[]>;
    /**
     * [Preview API] Returns throttled queue as per the task hub license of parallel releases
     *
     * @param {string} projectId
     * @param {number} releaseId
     * @return IPromise<Contracts.QueuedReleaseData[]>
     */
    getQueuedReleases(projectId?: string, releaseId?: number): IPromise<Contracts.QueuedReleaseData[]>;
}
/**
 * @exemptedapi
 */
export class ReleaseHttpClient2_3 extends CommonMethods2_2To4 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API] Get A Release
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId - Id of the release.
     * @param {boolean} includeAllApprovals - Include all approvals in the result. Default is 'true'.
     * @param {string[]} propertyFilters - A comma-delimited list of properties to include in the results.
     * @return IPromise<Contracts.Release>
     */
    getRelease(project: string, releaseId: number, includeAllApprovals?: boolean, propertyFilters?: string[]): IPromise<Contracts.Release>;
    /**
     * [Preview API] Get a list of releases
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId - Releases from this release definition Id.
     * @param {number} definitionEnvironmentId
     * @param {string} searchText - Releases with names starting with searchText.
     * @param {string} createdBy - Releases created by this user.
     * @param {Contracts.ReleaseStatus} statusFilter - Releases that have this status.
     * @param {number} environmentStatusFilter
     * @param {Date} minCreatedTime - Releases that were created after this time.
     * @param {Date} maxCreatedTime - Releases that were created before this time.
     * @param {Contracts.ReleaseQueryOrder} queryOrder - Gets the results in the defined order of created date for releases. Default is descending.
     * @param {number} top - Number of releases to get. Default is 50.
     * @param {number} continuationToken - Gets the releases after the continuation token provided.
     * @param {Contracts.ReleaseExpands} expand - The property that should be expanded in the list of releases.
     * @param {string} artifactTypeId - Releases with given artifactTypeId will be returned. Values can be Build, Jenkins, GitHub, Nuget, Team Build (external), ExternalTFSBuild, Git, TFVC, ExternalTfsXamlBuild.
     * @param {string} sourceId - Unique identifier of the artifact used. e.g. For build it would be {projectGuid}:{BuildDefinitionId}, for Jenkins it would be {JenkinsConnectionId}:{JenkinsDefinitionId}, for TfsOnPrem it would be {TfsOnPremConnectionId}:{ProjectName}:{TfsOnPremDefinitionId}. For third-party artifacts e.g. TeamCity, BitBucket you may refer 'uniqueSourceIdentifier' inside vss-extension.json https://github.com/Microsoft/vsts-rm-extensions/blob/master/Extensions.
     * @param {string} artifactVersionId - Releases with given artifactVersionId will be returned. E.g. in case of Build artifactType, it is buildId.
     * @param {string} sourceBranchFilter - Releases with given sourceBranchFilter will be returned.
     * @param {boolean} isDeleted - Gets the soft deleted releases, if true.
     * @param {string[]} tagFilter - A comma-delimited list of tags. Only releases with these tags will be returned.
     * @param {string[]} propertyFilters - A comma-delimited list of extended properties to retrieve.
     * @return IPromise<Contracts.Release[]>
     */
    getReleases(project: string, definitionId?: number, definitionEnvironmentId?: number, searchText?: string, createdBy?: string, statusFilter?: Contracts.ReleaseStatus, environmentStatusFilter?: number, minCreatedTime?: Date, maxCreatedTime?: Date, queryOrder?: Contracts.ReleaseQueryOrder, top?: number, continuationToken?: number, expand?: Contracts.ReleaseExpands, artifactTypeId?: string, sourceId?: string, artifactVersionId?: string, sourceBranchFilter?: string, isDeleted?: boolean, tagFilter?: string[], propertyFilters?: string[]): IPromise<Contracts.Release[]>;
}
/**
 * @exemptedapi
 */
export class ReleaseHttpClient2_2 extends CommonMethods2_2To4 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API] Get A Release
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId - Id of the release.
     * @param {boolean} includeAllApprovals - Include all approvals in the result. Default is 'true'.
     * @param {string[]} propertyFilters - A comma-delimited list of properties to include in the results.
     * @return IPromise<Contracts.Release>
     */
    getRelease(project: string, releaseId: number, includeAllApprovals?: boolean, propertyFilters?: string[]): IPromise<Contracts.Release>;
    /**
     * [Preview API] Get a list of releases
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId - Releases from this release definition Id.
     * @param {number} definitionEnvironmentId
     * @param {string} searchText - Releases with names starting with searchText.
     * @param {string} createdBy - Releases created by this user.
     * @param {Contracts.ReleaseStatus} statusFilter - Releases that have this status.
     * @param {number} environmentStatusFilter
     * @param {Date} minCreatedTime - Releases that were created after this time.
     * @param {Date} maxCreatedTime - Releases that were created before this time.
     * @param {Contracts.ReleaseQueryOrder} queryOrder - Gets the results in the defined order of created date for releases. Default is descending.
     * @param {number} top - Number of releases to get. Default is 50.
     * @param {number} continuationToken - Gets the releases after the continuation token provided.
     * @param {Contracts.ReleaseExpands} expand - The property that should be expanded in the list of releases.
     * @param {string} artifactTypeId - Releases with given artifactTypeId will be returned. Values can be Build, Jenkins, GitHub, Nuget, Team Build (external), ExternalTFSBuild, Git, TFVC, ExternalTfsXamlBuild.
     * @param {string} sourceId - Unique identifier of the artifact used. e.g. For build it would be {projectGuid}:{BuildDefinitionId}, for Jenkins it would be {JenkinsConnectionId}:{JenkinsDefinitionId}, for TfsOnPrem it would be {TfsOnPremConnectionId}:{ProjectName}:{TfsOnPremDefinitionId}. For third-party artifacts e.g. TeamCity, BitBucket you may refer 'uniqueSourceIdentifier' inside vss-extension.json https://github.com/Microsoft/vsts-rm-extensions/blob/master/Extensions.
     * @param {string} artifactVersionId - Releases with given artifactVersionId will be returned. E.g. in case of Build artifactType, it is buildId.
     * @param {string} sourceBranchFilter - Releases with given sourceBranchFilter will be returned.
     * @param {boolean} isDeleted - Gets the soft deleted releases, if true.
     * @param {string[]} tagFilter - A comma-delimited list of tags. Only releases with these tags will be returned.
     * @param {string[]} propertyFilters - A comma-delimited list of extended properties to retrieve.
     * @return IPromise<Contracts.Release[]>
     */
    getReleases(project: string, definitionId?: number, definitionEnvironmentId?: number, searchText?: string, createdBy?: string, statusFilter?: Contracts.ReleaseStatus, environmentStatusFilter?: number, minCreatedTime?: Date, maxCreatedTime?: Date, queryOrder?: Contracts.ReleaseQueryOrder, top?: number, continuationToken?: number, expand?: Contracts.ReleaseExpands, artifactTypeId?: string, sourceId?: string, artifactVersionId?: string, sourceBranchFilter?: string, isDeleted?: boolean, tagFilter?: string[], propertyFilters?: string[]): IPromise<Contracts.Release[]>;
}
/**
 * @exemptedapi
 */
export class ReleaseHttpClient2_1 extends CommonMethods2To4 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class ReleaseHttpClient2 extends CommonMethods2To4 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
export class ReleaseHttpClient extends ReleaseHttpClient4 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * Gets an http client targeting the latest released version of the APIs.
 *
 * @return ReleaseHttpClient3_2
 */
export function getClient(options?: VSS_WebApi.IVssHttpClientOptions): ReleaseHttpClient3_2;
}
declare module "ReleaseManagement/Core/Utils" {
import RMContracts = require("ReleaseManagement/Core/Contracts");
export class ReleaseEnvironmentStatusHelper {
    static isEnvironmentCompleted(environment: RMContracts.ReleaseEnvironment): boolean;
}
}
declare module "TFS/DistributedTaskCommon/Contracts" {
/**
 * ---------------------------------------------------------
 * Generated file, DO NOT EDIT
 * ---------------------------------------------------------
 *
 * See following wiki page for instructions on how to regenerate:
 *   https://vsowiki.com/index.php?title=Rest_Client_Generation
 *
 * Configuration file:
 *   DistributedTask\Shared\Common\Contracts\ClientGeneratorConfigs\genclient.json
 */
export interface DataSourceBindingBase {
    dataSourceName: string;
    endpointId: string;
    endpointUrl: string;
    parameters: {
        [key: string]: string;
    };
    resultSelector: string;
    resultTemplate: string;
    target: string;
}
export interface ProcessParameters {
    dataSourceBindings: DataSourceBindingBase[];
    inputs: TaskInputDefinitionBase[];
    sourceDefinitions: TaskSourceDefinitionBase[];
}
export interface TaskInputDefinitionBase {
    defaultValue: string;
    groupName: string;
    helpMarkDown: string;
    label: string;
    name: string;
    options: {
        [key: string]: string;
    };
    properties: {
        [key: string]: string;
    };
    required: boolean;
    type: string;
    visibleRule: string;
}
export interface TaskSourceDefinitionBase {
    authKey: string;
    endpoint: string;
    keySelector: string;
    selector: string;
    target: string;
}
}
