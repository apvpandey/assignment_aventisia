export const NAV_ITEMS = [
  {
    section: 'MY PROJECTS',
    items: [
      { label: 'Agents',     iconKey: 'agents'    },
      { label: 'AI Models',  iconKey: 'aiModels'  },
      { label: 'Library',    iconKey: 'library'   },
    ],
  },
  {
    section: 'ORCHESTRATOR',
    items: [
      { label: 'Published',       iconKey: 'published'     },
      { label: 'Machines',        iconKey: 'machines'      },
      { label: 'Queues',          iconKey: 'queues'        },
      { label: 'Triggers',        iconKey: 'triggers'      },
      { label: 'Jobs',            iconKey: 'jobs'          },
      { label: 'Executions',      iconKey: 'executions'    },
      { label: 'Vault',           iconKey: 'vault'         },
      { label: 'Knowledge Base',  iconKey: 'knowledgeBase', active: true },
      { label: 'Key Store',       iconKey: 'keyStore'      },
    ],
  },
  {
    section: 'ADMIN',
    items: [
      { label: 'Tenant',       iconKey: 'tenant'       },
      { label: 'Integrations', iconKey: 'integrations' },
    ],
  },
];

export const CARDS = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  title: 'Test',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
  createdOn: '14/07/2025',
}));
