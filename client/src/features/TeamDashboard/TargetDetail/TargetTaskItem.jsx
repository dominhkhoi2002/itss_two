import { format } from 'date-fns';
import { Edit2, Trash } from 'lucide-react';
import React from 'react';
import { Badge } from '~/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '~/components/ui/context-menu';
import useTasksStore from './hooks/useTasksStore';

const TargetTaskItem = ({ taskId, title, due, description, exp }) => {
  const { onOpen, setSelectedTaskId } = useTasksStore();

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <Card
          onClick={() => setSelectedTaskId(taskId)}
          className="cursor-pointer hover:shadow-md"
        >
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description || 'No description'}</CardDescription>
          </CardHeader>
          {/* <CardContent>
            <p>Card Content</p>
          </CardContent> */}
          <CardFooter className="flex items-center justify-between">
            <p className="text-sm">
              {due ? format(new Date(due), 'MM/dd/yyyy') : 'Not specified'}
            </p>
            <Badge>+ {exp} EXP</Badge>
          </CardFooter>
        </Card>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem
          onClick={() =>
            onOpen('updateTask', {
              taskId,
              title,
              due,
              description,
              exp,
            })
          }
          className="cursor-pointer"
        >
          <Edit2 className="w-4 h-4 mr-2" />
          Update
        </ContextMenuItem>
        <ContextMenuItem
          onClick={() => onOpen('deleteTask', { taskId })}
          className="cursor-pointer"
        >
          <Trash className="w-4 h-4 mr-2" />
          Delete
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export default TargetTaskItem;