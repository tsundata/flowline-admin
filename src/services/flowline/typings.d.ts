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
    Items: Code[];
    apiVersion?: string;
    continue?: string;
    kind?: string;
    remainingItemCount?: number;
    resourceVersion?: string;
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
    description?: string;
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
    Items: Connection[];
    apiVersion?: string;
    continue?: string;
    kind?: string;
    remainingItemCount?: number;
    resourceVersion?: string;
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
    edges?: Edge[];
    finalizers?: string[];
    generation?: number;
    kind?: string;
    labels?: Record<string, any>;
    name?: string;
    nodes?: Node[];
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
    Items: Dag[];
    apiVersion?: string;
    continue?: string;
    kind?: string;
    remainingItemCount?: number;
    resourceVersion?: string;
  };

  type dagUpdateParams = {
    /** uid of the resource */
    uid: string;
  };

  type dagWatchParams = {
    /** uid of the resource */
    uid: string;
  };

  type Edge = connector;

  type Event = {
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
    Items: Event[];
    apiVersion?: string;
    continue?: string;
    kind?: string;
    remainingItemCount?: number;
    resourceVersion?: string;
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
    creationTimestamp?: string;
    deletionGracePeriodSeconds?: number;
    deletionTimestamp?: string;
    finalizers?: string[];
    generation?: number;
    kind?: string;
    labels?: Record<string, any>;
    name?: string;
    resourceVersion?: string;
    scheduleTimestamp?: string;
    state?: string;
    triggerTimestamp?: string;
    uid?: string;
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
    Items: Job[];
    apiVersion?: string;
    continue?: string;
    kind?: string;
    remainingItemCount?: number;
    resourceVersion?: string;
  };

  type jobUpdateParams = {
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
    group?: string;
    height?: number;
    id?: string;
    isGroup?: boolean;
    label?: string;
    parentId?: string;
    ports?: ports[];
    renderKey?: string;
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

  type output = Record<string, any>;

  type permissions = Record<string, any>;

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
    permissions?: permissions[];
    resourceVersion?: string;
    uid?: string;
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
    Items: RoleBinding[];
    apiVersion?: string;
    continue?: string;
    kind?: string;
    remainingItemCount?: number;
    resourceVersion?: string;
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
    Items: Role[];
    apiVersion?: string;
    continue?: string;
    kind?: string;
    remainingItemCount?: number;
    resourceVersion?: string;
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
    connection?: Connection[];
    creationTimestamp?: string;
    dagUID?: string;
    deletionGracePeriodSeconds?: number;
    deletionTimestamp?: string;
    finalizers?: string[];
    generation?: number;
    input?: input;
    jobUID?: string;
    kind?: string;
    labels?: Record<string, any>;
    name?: string;
    output?: output;
    priority?: number;
    resourceVersion?: string;
    runtime?: string;
    schedulerName?: string;
    state?: string;
    uid?: string;
    variable?: Variable[];
    workerHost?: string;
    workerUID?: string;
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
    Items: Stage[];
    apiVersion?: string;
    continue?: string;
    kind?: string;
    remainingItemCount?: number;
    resourceVersion?: string;
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
    details?: StatusDetails;
    kind?: string;
    message?: string;
    metadata?: ListMeta;
    reason?: string;
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
    kind?: string;
    labels?: Record<string, any>;
    name?: string;
    password?: string;
    resourceVersion?: string;
    uid?: string;
    unreadCount?: number;
    username?: string;
  };

  type userDeleteParams = {
    /** uid of the resource */
    uid: string;
  };

  type userDeleteSessionParams = {
    /** uid of the resource */
    uid: string;
  };

  type userGetParams = {
    /** uid of the resource */
    uid: string;
  };

  type UserList = {
    Items: User[];
    apiVersion?: string;
    continue?: string;
    kind?: string;
    remainingItemCount?: number;
    resourceVersion?: string;
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
    description?: string;
    finalizers?: string[];
    generation?: number;
    key?: string;
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
    Items: User[];
    apiVersion?: string;
    continue?: string;
    kind?: string;
    remainingItemCount?: number;
    resourceVersion?: string;
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
    host?: string;
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
    Items: Worker[];
    apiVersion?: string;
    continue?: string;
    kind?: string;
    remainingItemCount?: number;
    resourceVersion?: string;
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
  };

  type workflowGetParams = {
    /** uid of the resource */
    uid: string;
  };

  type WorkflowList = {
    Items: Workflow[];
    apiVersion?: string;
    continue?: string;
    kind?: string;
    remainingItemCount?: number;
    resourceVersion?: string;
  };

  type workflowUpdateDagParams = {
    /** uid of the resource */
    uid: string;
  };

  type workflowUpdateParams = {
    /** uid of the resource */
    uid: string;
  };

  type workflowWatchParams = {
    /** uid of the resource */
    uid: string;
  };
}
