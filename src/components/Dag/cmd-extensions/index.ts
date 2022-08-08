import type { ICommandContributionConfig } from '@antv/xflow';
import { NsTestCmd, TestAsyncCommand } from './cmd-async-test';
import { DeployDagCommand, NsDeployDagCmd } from './cmd-deploy';
import { NsRenameNodeCmd, RenameNodeCommand } from './cmd-rename-node-modal';
/** 注册成为可以执行的命令 */

export const commandContributions: ICommandContributionConfig[] = [
  {
    ...NsTestCmd,
    CommandHandler: TestAsyncCommand,
  },
  {
    ...NsDeployDagCmd,
    CommandHandler: DeployDagCommand,
  },
  {
    ...NsRenameNodeCmd,
    CommandHandler: RenameNodeCommand,
  },
];
