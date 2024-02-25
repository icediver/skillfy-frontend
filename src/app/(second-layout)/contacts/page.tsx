import type { Metadata } from 'next';

import { NO_INDEX_PAGE } from '@/constants/seo.constants';
import { Contacts } from '@/components/screen/contacts/Contacts';

export const metadata: Metadata = {
	title: 'Contacts',
	...NO_INDEX_PAGE,
};

export default function Page() {
	return <Contacts />;
}
