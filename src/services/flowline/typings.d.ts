declare namespace API {
  type Binding = {
    apiVersion?: string;
    creationTimestamp?: string;
    deletionGracePeriodSeconds?: number;
    deletionTimestamp?: string;
    finalizers?: string[];
    generation?: number;
    kind?: string;
    labels?: Record<string, any>;
    name?: string;
    resourceVersion?: string;
    target?: Worker;
    uid?: string;
  };

  type Code = {
    apiVersion?: string;
    code?: string;
    creationTimestamp?: string;
    deletionGracePeriodSeconds?: number;
    deletionTimestamp?: string;
    describe?: string;
    finalizers?: string[];
    generation?: number;
    kind?: string;
    labels?: Record<string, any>;
    name?: string;
    resourceVersion?: string;
    runtime?: string;
    uid?: string;
  };

  type codeDeleteParams = {
    /** uid of the resource */
    uid: string;
  };

  type codeGetParams = {
    /** uid of the resource */
    uid: string;
  };

  type CodeList = {
    apiVersion?: string;
    continue?: string;
    items: Code[];
    kind?: string;
    remainingItemCount?: number;
    resourceVersion?: string;
  };

  type codePatchParams = {
    /** uid of the resource */
    uid: string;
  };

  type codeUpdateParams = {
    /** uid of the resource */
    uid: string;
  };

  type codeWatchParams = {
    /** uid of the resource */
    uid: string;
  };

  type Connection = {
    apiVersion?: string;
    creationTimestamp?: string;
    deletionGracePeriodSeconds?: number;
    deletionTimestamp?: string;
    describe?: string;
    extra?: string;
    finalizers?: string[];
    generation?: number;
    host?: string;
    kind?: string;
    labels?: Record<string, any>;
    login?: string;
    name?: string;
    password?: string;
    port?: number;
    resourceVersion?: string;
    schema?: string;
    type?: string;
    uid?: string;
  };

  type connectionDeleteParams = {
    /** uid of the resource */
    uid: string;
  };

  type connectionGetParams = {
    /** uid of the resource */
    uid: string;
  };

  type ConnectionList = {
    apiVersion?: string;
    continue?: string;
    items: Connection[];
    kind?: string;
    remainingItemCount?: number;
    resourceVersion?: string;
  };

  type connectionPatchParams = {
    /** uid of the resource */
    uid: string;
  };

  type connectionUpdateParams = {
    /** uid of the resource */
    uid: string;
  };

  type connectionWatchParams = {
    /** uid of the resource */
    uid: string;
  };

  type connector = {
    name?: string;
  };

  type Dag = {
    apiVersion?: string;
    creationTimestamp?: string;
    deletionGracePeriodSeconds?: number;
    deletionTimestamp?: string;
    edges: Edge[];
    finalizers?: string[];
    generation?: number;
    kind?: string;
    labels?: Record<string, any>;
    name?: string;
    nodes: Node[];
    resourceVersion?: string;
    uid?: string;
    workflowUID?: string;
  };

  type dagDeleteParams = {
    /** uid of the resource */
    uid: string;
  };

  type dagGetParams = {
    /** uid of the resource */
    uid: string;
  };

  type DagList = {
    apiVersion?: string;
    continue?: string;
    items: Dag[];
    kind?: string;
    remainingItemCount?: number;
    resourceVersion?: string;
  };

  type dagPatchParams = {
    /** uid of the resource */
    uid: string;
  };

  type dagUpdateParams = {
    /** uid of the resource */
    uid: string;
  };

  type dagWatchParams = {
    /** uid of the resource */
    uid: string;
  };

  type Dashboard = {
    codeAmount: number;
    data?: DashboardData[];
    variableAmount: number;
    workerAmount: number;
    workflowAmount: number;
  };

  type DashboardData = {
    date: string;
    schedule: number;
  };

  type Edge = connector;

  type Event = {
    action?: string;
    apiVersion?: string;
    count?: number;
    creationTimestamp?: string;
    deletionGracePeriodSeconds?: number;
    deletionTimestamp?: string;
    eventTime?: string;
    finalizers?: string[];
    firstTimestamp?: string;
    generation?: number;
    involvedObject: ObjectReference;
    kind?: string;
    labels?: Record<string, any>;
    lastTimestamp?: string;
    message?: string;
    name?: string;
    note?: string;
    reason?: string;
    regarding?: ObjectReference;
    related?: ObjectReference;
    reportingComponent: string;
    reportingInstance: string;
    resourceVersion?: string;
    series?: EventSeries;
    source?: EventSource;
    type?: string;
    uid?: string;
  };

  type eventDeleteParams = {
    /** uid of the resource */
    uid: string;
  };

  type eventGetParams = {
    /** uid of the resource */
    uid: string;
  };

  type EventList = {
    apiVersion?: string;
    continue?: string;
    items: Event[];
    kind?: string;
    remainingItemCount?: number;
    resourceVersion?: string;
  };

  type eventListKindParams = {
    /** Involved Object UID */
    uid: string;
  };

  type eventPatchParams = {
    /** uid of the resource */
    uid: string;
  };

  type EventSeries = {
    count?: number;
    lastObservedTime?: string;
  };

  type EventSource = {
    component?: string;
    host?: string;
  };

  type eventUpdateParams = {
    /** uid of the resource */
    uid: string;
  };

  type eventWatchParams = {
    /** uid of the resource */
    uid: string;
  };

  type input = Record<string, any>;

  type Job = {
    apiVersion?: string;
    completionTimestamp?: string;
    creationTimestamp?: string;
    deletionGracePeriodSeconds?: number;
    deletionTimestamp?: string;
    finalizers?: string[];
    generation?: number;
    kind?: string;
    labels?: Record<string, any>;
    name?: string;
    resourceVersion?: string;
    state?: string;
    uid?: string;
    workflowUID: string;
  };

  type jobDeleteParams = {
    /** uid of the resource */
    uid: string;
  };

  type jobGetParams = {
    /** uid of the resource */
    uid: string;
  };

  type JobList = {
    apiVersion?: string;
    continue?: string;
    items: Job[];
    kind?: string;
    remainingItemCount?: number;
    resourceVersion?: string;
  };

  type jobPatchParams = {
    /** uid of the resource */
    uid: string;
  };

  type jobUpdateParams = {
    /** uid of the resource */
    uid: string;
  };

  type jobUpdateStateParams = {
    /** uid of the resource */
    uid: string;
  };

  type jobWatchParams = {
    /** uid of the resource */
    uid: string;
  };

  type ListMeta = {
    continue?: string;
    remainingItemCount?: number;
    resourceVersion?: string;
  };

  type Node = {
    _order?: number;
    code: string;
    connections: string[];
    group?: string;
    height?: number;
    id?: string;
    isGroup?: boolean;
    label?: string;
    parentId?: string;
    ports?: ports[];
    renderKey?: string;
    status?: string;
    variables: string[];
    width?: number;
    x?: number;
    y?: number;
  };

  type ObjectMeta = {
    creationTimestamp?: string;
    deletionGracePeriodSeconds?: number;
    deletionTimestamp?: string;
    finalizers?: string[];
    generation?: number;
    labels?: Record<string, any>;
    name?: string;
    resourceVersion?: string;
    uid?: string;
  };

  type ObjectReference = {
    apiVersion?: string;
    fieldPath?: string;
    kind?: string;
    name?: string;
    resourceVersion?: string;
    uid?: string;
  };

  type output = Record<string, any>;

  type ports = {
    connected?: boolean;
    group?: string;
    id?: string;
    tooltip?: string;
    type?: string;
  };

  type Role = {
    apiVersion?: string;
    creationTimestamp?: string;
    deletionGracePeriodSeconds?: number;
    deletionTimestamp?: string;
    finalizers?: string[];
    generation?: number;
    kind?: string;
    labels?: Record<string, any>;
    name?: string;
    resourceVersion?: string;
    resources?: string[];
    uid?: string;
    verbs?: string[];
  };

  type RoleBinding = {
    apiVersion?: string;
    creationTimestamp?: string;
    deletionGracePeriodSeconds?: number;
    deletionTimestamp?: string;
    finalizers?: string[];
    generation?: number;
    kind?: string;
    labels?: Record<string, any>;
    name?: string;
    resourceVersion?: string;
    roleUID?: string;
    uid?: string;
    userUID?: string;
  };

  type rolebindingDeleteParams = {
    /** uid of the resource */
    uid: string;
  };

  type rolebindingGetParams = {
    /** uid of the resource */
    uid: string;
  };

  type RoleBindingList = {
    apiVersion?: string;
    continue?: string;
    items: RoleBinding[];
    kind?: string;
    remainingItemCount?: number;
    resourceVersion?: string;
  };

  type rolebindingPatchParams = {
    /** uid of the resource */
    uid: string;
  };

  type rolebindingUpdateParams = {
    /** uid of the resource */
    uid: string;
  };

  type rolebindingWatchParams = {
    /** uid of the resource */
    uid: string;
  };

  type roleDeleteParams = {
    /** uid of the resource */
    uid: string;
  };

  type roleGetParams = {
    /** uid of the resource */
    uid: string;
  };

  type RoleList = {
    apiVersion?: string;
    continue?: string;
    items: Role[];
    kind?: string;
    remainingItemCount?: number;
    resourceVersion?: string;
  };

  type rolePatchParams = {
    /** uid of the resource */
    uid: string;
  };

  type roleUpdateParams = {
    /** uid of the resource */
    uid: string;
  };

  type roleWatchParams = {
    /** uid of the resource */
    uid: string;
  };

  type router = {
    name?: string;
  };

  type Stage = {
    apiVersion?: string;
    code?: string;
    connections?: Connection[];
    creationTimestamp?: string;
    dagUID?: string;
    deletionGracePeriodSeconds?: number;
    deletionTimestamp?: string;
    dependNodeId?: string[];
    finalizers?: string[];
    generation?: number;
    input?: input;
    jobUID?: string;
    kind?: string;
    labels?: Record<string, any>;
    name?: string;
    nodeID?: string;
    output?: output;
    priority?: number;
    resourceVersion?: string;
    runtime?: string;
    schedulerName?: string;
    state?: string;
    uid?: string;
    variables?: Variable[];
    workerHost?: string;
    workerUID?: string;
    workflowUID?: string;
  };

  type stageDeleteParams = {
    /** uid of the resource */
    uid: string;
  };

  type stageGetParams = {
    /** uid of the resource */
    uid: string;
  };

  type StageList = {
    apiVersion?: string;
    continue?: string;
    items: Stage[];
    kind?: string;
    remainingItemCount?: number;
    resourceVersion?: string;
  };

  type stagePatchParams = {
    /** uid of the resource */
    uid: string;
  };

  type stageUpdateBindingParams = {
    /** uid of the resource */
    uid: string;
  };

  type stageUpdateListParams = {
    /** uid of the resource */
    uid: string;
  };

  type stageUpdateParams = {
    /** uid of the resource */
    uid: string;
  };

  type stageWatchParams = {
    /** uid of the resource */
    uid: string;
  };

  type Status = {
    apiVersion?: string;
    code?: number;
    continue?: string;
    details?: StatusDetails;
    kind?: string;
    message?: string;
    reason?: string;
    remainingItemCount?: number;
    resourceVersion?: string;
    status?: string;
  };

  type StatusDetails = {
    causes?: string[];
    group?: string;
    kind?: string;
    name?: string;
    retryAfterSeconds?: number;
    uid?: string;
  };

  type TypeMeta = {
    apiVersion?: string;
    kind?: string;
  };

  type User = {
    active?: boolean;
    apiVersion?: string;
    avatar?: string;
    creationTimestamp?: string;
    deletionGracePeriodSeconds?: number;
    deletionTimestamp?: string;
    email?: string;
    finalizers?: string[];
    generation?: number;
    groups?: string[];
    kind?: string;
    labels?: Record<string, any>;
    name?: string;
    password?: string;
    resourceVersion?: string;
    roles?: string[];
    uid?: string;
    unreadCount?: number;
  };

  type userDeleteParams = {
    /** uid of the resource */
    uid: string;
  };

  type userDeleteSessionParams = {
    /** uid of the resource */
    uid: string;
  };

  type userGetDashboardParams = {
    /** uid of the resource */
    uid: string;
  };

  type userGetParams = {
    /** uid of the resource */
    uid: string;
  };

  type UserList = {
    apiVersion?: string;
    continue?: string;
    items: User[];
    kind?: string;
    remainingItemCount?: number;
    resourceVersion?: string;
  };

  type userPatchParams = {
    /** uid of the resource */
    uid: string;
  };

  type UserSession = {
    apiVersion?: string;
    creationTimestamp?: string;
    deletionGracePeriodSeconds?: number;
    deletionTimestamp?: string;
    finalizers?: string[];
    generation?: number;
    kind?: string;
    labels?: Record<string, any>;
    name?: string;
    password?: string;
    resourceVersion?: string;
    token?: string;
    uid?: string;
    userUID?: string;
    username?: string;
  };

  type userUpdateParams = {
    /** uid of the resource */
    uid: string;
  };

  type userWatchParams = {
    /** uid of the resource */
    uid: string;
  };

  type Variable = {
    apiVersion?: string;
    creationTimestamp?: string;
    deletionGracePeriodSeconds?: number;
    deletionTimestamp?: string;
    describe?: string;
    finalizers?: string[];
    generation?: number;
    kind?: string;
    labels?: Record<string, any>;
    name?: string;
    resourceVersion?: string;
    uid?: string;
    value?: string;
  };

  type variableDeleteParams = {
    /** uid of the resource */
    uid: string;
  };

  type variableGetParams = {
    /** uid of the resource */
    uid: string;
  };

  type VariableList = {
    apiVersion?: string;
    continue?: string;
    items: Variable[];
    kind?: string;
    remainingItemCount?: number;
    resourceVersion?: string;
  };

  type variablePatchParams = {
    /** uid of the resource */
    uid: string;
  };

  type variableUpdateParams = {
    /** uid of the resource */
    uid: string;
  };

  type variableWatchParams = {
    /** uid of the resource */
    uid: string;
  };

  type Worker = {
    apiVersion?: string;
    creationTimestamp?: string;
    deletionGracePeriodSeconds?: number;
    deletionTimestamp?: string;
    finalizers?: string[];
    generation?: number;
    hostname?: string;
    kind?: string;
    labels?: Record<string, any>;
    name?: string;
    resourceVersion?: string;
    runtimes?: string[];
    state?: string;
    uid?: string;
  };

  type workerDeleteParams = {
    /** uid of the resource */
    uid: string;
  };

  type workerGetParams = {
    /** uid of the resource */
    uid: string;
  };

  type WorkerList = {
    apiVersion?: string;
    continue?: string;
    items: Worker[];
    kind?: string;
    remainingItemCount?: number;
    resourceVersion?: string;
  };

  type workerPatchParams = {
    /** uid of the resource */
    uid: string;
  };

  type workerUpdateHeartbeatParams = {
    /** uid of the resource */
    uid: string;
  };

  type workerUpdateParams = {
    /** uid of the resource */
    uid: string;
  };

  type workerWatchParams = {
    /** uid of the resource */
    uid: string;
  };

  type Workflow = {
    LastSuccessfulTimestamp?: string;
    active?: boolean;
    apiVersion?: string;
    creationTimestamp?: string;
    currentTriggerTimestamp?: string;
    deletionGracePeriodSeconds?: number;
    deletionTimestamp?: string;
    describe?: string;
    finalizers?: string[];
    generation?: number;
    kind?: string;
    labels?: Record<string, any>;
    lastTriggerTimestamp?: string;
    name?: string;
    resourceVersion?: string;
    trigger?: string;
    triggerParam?: string;
    uid?: string;
  };

  type workflowDeleteParams = {
    /** uid of the resource */
    uid: string;
  };

  type workflowGetDagParams = {
    /** uid of the resource */
    uid: string;
    /** Job UID for query status */
    jobUID?: string;
  };

  type workflowGetParams = {
    /** uid of the resource */
    uid: string;
  };

  type WorkflowList = {
    apiVersion?: string;
    continue?: string;
    items: Workflow[];
    kind?: string;
    remainingItemCount?: number;
    resourceVersion?: string;
  };

  type workflowPatchParams = {
    /** uid of the resource */
    uid: string;
  };

  type workflowUpdateDagParams = {
    /** uid of the resource */
    uid: string;
  };

  type workflowUpdateParams = {
    /** uid of the resource */
    uid: string;
  };

  type workflowUpdateStateParams = {
    /** uid of the resource */
    uid: string;
  };

  type workflowWatchParams = {
    /** uid of the resource */
    uid: string;
  };
}
