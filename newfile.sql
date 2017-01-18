
/* Drop Tables */

DROP TABLE IF EXISTS tasks;
DROP TABLE IF EXISTS task_priorities;
DROP TABLE IF EXISTS task_statuses;




/* Create Tables */

CREATE TABLE tasks
(
	id serial NOT NULL,
	-- タスク名商
	name text NOT NULL,
	-- タスク内容
	content text,
	-- 開始日
	start_day date,
	-- 終了日
	end_day date,
	-- ステータスID
	status_id int NOT NULL UNIQUE,
	-- 優先度ID
	priority_id int NOT NULL UNIQUE,
	PRIMARY KEY (id)
) WITHOUT OIDS;


CREATE TABLE task_priorities
(
	id serial NOT NULL UNIQUE,
	-- 優先度名
	name text NOT NULL,
	PRIMARY KEY (id)
) WITHOUT OIDS;


CREATE TABLE task_statuses
(
	id serial NOT NULL UNIQUE,
	-- ステータス名
	name text NOT NULL,
	PRIMARY KEY (id)
) WITHOUT OIDS;



/* Create Foreign Keys */

ALTER TABLE tasks
	ADD FOREIGN KEY (priority_id)
	REFERENCES task_priorities (id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE tasks
	ADD FOREIGN KEY (status_id)
	REFERENCES task_statuses (id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;



/* Comments */

COMMENT ON COLUMN tasks.name IS 'タスク名商';
COMMENT ON COLUMN tasks.content IS 'タスク内容';
COMMENT ON COLUMN tasks.start_day IS '開始日';
COMMENT ON COLUMN tasks.end_day IS '終了日';
COMMENT ON COLUMN tasks.status_id IS 'ステータスID';
COMMENT ON COLUMN tasks.priority_id IS '優先度ID';
COMMENT ON COLUMN task_priorities.name IS '優先度名';
COMMENT ON COLUMN task_statuses.name IS 'ステータス名';



