import '@styles/search.css';
import { useEffect, useState, useRef } from 'react';
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';
import {
  InstantSearch,
  Hits,
  Configure,
  useSearchBox,
  useInstantSearch,
} from 'react-instantsearch';

import type { Hit as AlgoliaHit } from 'instantsearch.js';
import type { Dispatch, SetStateAction } from 'react';

const MagnifyingGlassSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const { apiKey, host } = (() => {
  const apiKey = import.meta.env.PUBLIC_MEILISEARCH_DOCUMENTS_CLIENT_API_KEY;
  const host = import.meta.env.PUBLIC_MEILISEARCH_HOST;

  if (!apiKey || !host) {
    throw Error(
      `👹 Oops! Missing environment variables (host ${host}, apiKey ${apiKey})`,
    );
  }

  return {
    apiKey,
    host,
  };
})();

const { searchClient } = instantMeiliSearch(host, apiKey);

// TODO: Share types with indexer
type HitProps = {
  hit: AlgoliaHit<{
    id: string;
    title: string;
    content: string;
    date: Date;
    url: string;
  }>;
};

const Hit = ({ hit }: HitProps) => {
  // TODO: Disabled the extended text match
  // in favour of titles for the initial version.
  // It should bring back the text/query matching.
  // See file commmit history
  return (
    <a key={hit.id} href={hit.url}>
      <span>{hit.title}</span>
    </a>
  );
};

const CustomSearchBox = ({
  setOpenModal,
}: {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const { query, refine } = useSearchBox();
  const { results } = useInstantSearch();
  const [inputValue, setInputValue] = useState(query);
  const inputRef = useRef<HTMLInputElement>(null);

  const setQuery = (newQuery: string) => {
    setInputValue(newQuery);

    refine(newQuery);
  };

  return (
    <>
      <div className="search-box">
        <input
          ref={inputRef}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          placeholder="Search..."
          spellCheck={false}
          maxLength={300}
          value={inputValue}
          onChange={(event) => {
            setQuery(event.currentTarget.value);
          }}
          autoFocus
        />
        <button type="button" onClick={() => setOpenModal(false)}>
          Esc
        </button>
      </div>
      {query && !results.hits.length && (
        <p className="modal-no-result">No results</p>
      )}
    </>
  );
};

type Props = {
  indexName: string;
};

export default ({ indexName }: Props) => {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const onSearchFocus = () => setOpenModal(true);
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key.toLowerCase() === 'escape') {
      setOpenModal(false);
    }
  };

  return (
    <div className="search-btn">
      <div className="input-container desktop" onClick={onSearchFocus}>
        <input
          className="search-input"
          type="text"
          placeholder="Search..."
          readOnly={true}
        />
        <div className="icon-container">
          <MagnifyingGlassSVG />
        </div>
      </div>
      <div className="mobile" onClick={onSearchFocus}>
        <div className="icon-container">
          <MagnifyingGlassSVG />
        </div>
      </div>
      {openModal && (
        <div className="modal-open" onClick={() => setOpenModal(false)}>
          <div
            className="modal-user-box"
            onClick={(e: any) => e.stopPropagation()}
          >
            <InstantSearch
              indexName={indexName}
              searchClient={searchClient}
              insights={false}
            >
              <Configure
                hitsPerPage={12}
                attributesToSnippet={['content:32']}
              />
              <div className="modal-custom-search-container">
                <CustomSearchBox setOpenModal={setOpenModal} />
              </div>
              <div className="modal-hits-container">
                <Hits hitComponent={Hit} />
              </div>
            </InstantSearch>
          </div>
        </div>
      )}
    </div>
  );
};
